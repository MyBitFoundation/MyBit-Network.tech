import sys
import random
import FormulaSolidityPort


from decimal import Decimal
from decimal import getcontext
getcontext().prec = 80 # 78 digits for a maximum of 2^256-1, and 2 more digits for after the decimal point


def formulaTest(supply, balance, weight, amount):
    newAmount = FormulaSolidityPort.calculatePurchaseReturn(supply, balance, weight, amount)
    oldAmount = FormulaSolidityPort.calculateSaleReturn(supply + newAmount, balance + amount, weight, newAmount)
    if oldAmount > amount:
        error = ['Implementation Error:']
        error.append('supply    = {}'.format(supply))
        error.append('balance   = {}'.format(balance))
        error.append('weight    = {}'.format(weight))
        error.append('amount    = {}'.format(amount))
        error.append('newAmount = {}'.format(newAmount))
        error.append('oldAmount = {}'.format(oldAmount))
        raise BaseException('\n'.join(error))
    return Decimal(oldAmount) / Decimal(amount)


size = int(sys.argv[1]) if len(sys.argv) > 1 else 0
if size == 0:
    size = int(input('How many test-cases would you like to execute? '))


worstAccuracy = 1
numOfFailures = 0


for n in range(size):
    supply = random.randrange(2, 10 ** 26)
    balance = random.randrange(1, 10 ** 23)
    weight = random.randrange(1, 1000000)
    amount = random.randrange(1, supply)
    try:
        accuracy = formulaTest(supply, balance, weight, amount)
        worstAccuracy = min(worstAccuracy, accuracy)
    except Exception as error:
        accuracy = 0
        numOfFailures += 1
    except BaseException as error:
        print(error)
        break
    print('Test #{}: accuracy = {:.12f}, worst accuracy = {:.12f}, num of failures = {}'.format(n, accuracy, worstAccuracy, numOfFailures))
