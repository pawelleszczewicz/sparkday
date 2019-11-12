import { Injectable } from '@angular/core';
const accounts = [
    {
        'accountId': '10020',
        'accountType': 'CHK',
        'nickname': 'My account',
        'formattedAccountNumber': '(...6001)',
        'accountNumber': '0000006001-DDA',
        'alternateAccountNumber': '0000006001',
        'coreComponents': {
            'subtype': 'DDA',
            'number': '0000006001',
            'type': '1'
        },
        'isAsset': true,
        'isLiability': false,
        'branchNumber': '1',
        'privileges': {
            'internalTransferFromAllowed': true,
            'internalTransferToAllowed': true,
            'rdcAllowed': true,
            'c2cSendAllowed': true,
            'c2cReceiveAllowed': true,
            'p2pSendAllowed': true,
            'p2pReceiveAllowed': true,
            'externalTransferSendAllowed': true,
            'externalTransferReceiveAllowed': true,
            'loanTransferFromAllowed': false,
            'loanTransferToAllowed': false,
            'statementDeliveryAllowed': true,
            'statementViewingAllowed': true,
            'stopPaymentAllowed': false,
            'textBankingFromAllowed': true,
            'textBankingToAllowed': true,
            'achAllowed': true,
            'wiresAllowed': true,
            'billPayAllowed': true,
            'displayHistoryAllowed': true,
            'displayBalanceAllowed': true,
            'alertsAllowed': true,
            'transferCrossEntityAllowed': false,
            'checkStatusAllowed': true,
            'checkWithdrawalAllowed': true,
            'orderChecksAllowed': false,
            'picturePayAllowed': true,
            'balanceVerificationRequired': false,
            'sweepTransfersAllowed': true,
            'federalTaxPaymentsAllowed': true,
            'viewinginAccountsAllowed': true
        },
        'balances': [
            {
                'type': 'available',
                'amount': 45035.64
            },
            {
                'type': 'current',
                'amount': 45035.64
            }
        ]
    },
    {
        'accountId': '10044',
        'accountType': 'CHK',
        'nickname': 'Golden State Checking',
        'formattedAccountNumber': '(...9587)',
        'accountNumber': '8345099587-DDA',
        'alternateAccountNumber': '8345099587',
        'coreComponents': {
            'subtype': 'DDA',
            'number': '8345099587',
            'type': '1'
        },
        'isAsset': true,
        'isLiability': false,
        'branchNumber': '1',
        'privileges': {
            'internalTransferFromAllowed': true,
            'internalTransferToAllowed': true,
            'rdcAllowed': true,
            'c2cSendAllowed': true,
            'c2cReceiveAllowed': true,
            'p2pSendAllowed': false,
            'p2pReceiveAllowed': false,
            'externalTransferSendAllowed': true,
            'externalTransferReceiveAllowed': true,
            'loanTransferFromAllowed': false,
            'loanTransferToAllowed': false,
            'statementDeliveryAllowed': true,
            'statementViewingAllowed': true,
            'stopPaymentAllowed': false,
            'textBankingFromAllowed': true,
            'textBankingToAllowed': true,
            'achAllowed': true,
            'wiresAllowed': true,
            'billPayAllowed': true,
            'displayHistoryAllowed': true,
            'displayBalanceAllowed': true,
            'alertsAllowed': true,
            'transferCrossEntityAllowed': false,
            'checkStatusAllowed': true,
            'checkWithdrawalAllowed': true,
            'orderChecksAllowed': false,
            'picturePayAllowed': false,
            'balanceVerificationRequired': false,
            'sweepTransfersAllowed': true,
            'federalTaxPaymentsAllowed': true,
            'viewinginAccountsAllowed': true
        },
        'balances': [
            {
                'type': 'available',
                'amount': 14324.12
            },
            {
                'type': 'current',
                'amount': 14324.12
            }
        ]
    },
    {
        'accountId': '10022',
        'accountType': 'CHK',
        'nickname': 'Golden State Checking',
        'formattedAccountNumber': '(...0094)',
        'accountNumber': '0130000094-DDA',
        'alternateAccountNumber': '0130000094',
        'coreComponents': {
            'subtype': 'DDA',
            'number': '0130000094',
            'type': '1'
        },
        'isAsset': true,
        'isLiability': false,
        'branchNumber': '1',
        'privileges': {
            'internalTransferFromAllowed': true,
            'internalTransferToAllowed': true,
            'rdcAllowed': true,
            'c2cSendAllowed': true,
            'c2cReceiveAllowed': true,
            'p2pSendAllowed': false,
            'p2pReceiveAllowed': false,
            'externalTransferSendAllowed': true,
            'externalTransferReceiveAllowed': true,
            'loanTransferFromAllowed': false,
            'loanTransferToAllowed': false,
            'statementDeliveryAllowed': true,
            'statementViewingAllowed': true,
            'stopPaymentAllowed': false,
            'textBankingFromAllowed': true,
            'textBankingToAllowed': true,
            'achAllowed': true,
            'wiresAllowed': true,
            'billPayAllowed': true,
            'displayHistoryAllowed': true,
            'displayBalanceAllowed': true,
            'alertsAllowed': true,
            'transferCrossEntityAllowed': false,
            'checkStatusAllowed': true,
            'checkWithdrawalAllowed': true,
            'orderChecksAllowed': false,
            'picturePayAllowed': false,
            'balanceVerificationRequired': false,
            'sweepTransfersAllowed': true,
            'federalTaxPaymentsAllowed': true,
            'viewinginAccountsAllowed': true
        },
        'balances': [
            {
                'type': 'available',
                'amount': 156283.14
            },
            {
                'type': 'current',
                'amount': 156283.14
            }
        ]
    },
    {
        'accountId': '10023',
        'accountType': 'LOAN',
        'nickname': 'Developer Lines of Credit',
        'formattedAccountNumber': '(...1210)',
        'accountNumber': '00001210-CL',
        'alternateAccountNumber': '00001210',
        'coreComponents': {
            'subtype': 'CL',
            'number': '00001210',
            'type': '4'
        },
        'isAsset': false,
        'isLiability': true,
        'branchNumber': '1',
        'privileges': {
            'internalTransferFromAllowed': false,
            'internalTransferToAllowed': false,
            'rdcAllowed': false,
            'c2cSendAllowed': false,
            'c2cReceiveAllowed': false,
            'p2pSendAllowed': false,
            'p2pReceiveAllowed': false,
            'externalTransferSendAllowed': false,
            'externalTransferReceiveAllowed': false,
            'loanTransferFromAllowed': false,
            'loanTransferToAllowed': false,
            'statementDeliveryAllowed': true,
            'statementViewingAllowed': true,
            'stopPaymentAllowed': false,
            'textBankingFromAllowed': false,
            'textBankingToAllowed': false,
            'achAllowed': true,
            'wiresAllowed': true,
            'billPayAllowed': false,
            'displayHistoryAllowed': true,
            'displayBalanceAllowed': true,
            'alertsAllowed': true,
            'transferCrossEntityAllowed': false,
            'checkStatusAllowed': false,
            'checkWithdrawalAllowed': false,
            'orderChecksAllowed': false,
            'picturePayAllowed': false,
            'balanceVerificationRequired': false,
            'sweepTransfersAllowed': false,
            'federalTaxPaymentsAllowed': true,
            'viewinginAccountsAllowed': true
        },
        'balances': [
            {
                'type': 'available',
                'amount': 200000
            },
            {
                'type': 'current',
                'amount': 0
            }
        ]
    },
    {
        'accountId': '10024',
        'accountType': 'LOAN',
        'nickname': 'Commercial Land',
        'formattedAccountNumber': '(...8899)',
        'accountNumber': '66778899-CL',
        'alternateAccountNumber': '66778899',
        'coreComponents': {
            'subtype': 'CL',
            'number': '66778899',
            'type': '4'
        },
        'isAsset': false,
        'isLiability': true,
        'branchNumber': '1',
        'privileges': {
            'internalTransferFromAllowed': false,
            'internalTransferToAllowed': false,
            'rdcAllowed': false,
            'c2cSendAllowed': false,
            'c2cReceiveAllowed': false,
            'p2pSendAllowed': false,
            'p2pReceiveAllowed': false,
            'externalTransferSendAllowed': false,
            'externalTransferReceiveAllowed': false,
            'loanTransferFromAllowed': false,
            'loanTransferToAllowed': false,
            'statementDeliveryAllowed': true,
            'statementViewingAllowed': true,
            'stopPaymentAllowed': false,
            'textBankingFromAllowed': false,
            'textBankingToAllowed': false,
            'achAllowed': true,
            'wiresAllowed': true,
            'billPayAllowed': false,
            'displayHistoryAllowed': true,
            'displayBalanceAllowed': true,
            'alertsAllowed': true,
            'transferCrossEntityAllowed': false,
            'checkStatusAllowed': false,
            'checkWithdrawalAllowed': false,
            'orderChecksAllowed': false,
            'picturePayAllowed': false,
            'balanceVerificationRequired': false,
            'sweepTransfersAllowed': false,
            'federalTaxPaymentsAllowed': true,
            'viewinginAccountsAllowed': true
        },
        'balances': [
            {
                'type': 'available',
                'amount': 0
            },
            {
                'type': 'current',
                'amount': 9858.6
            }
        ]
    },
    {
        'accountId': '10025',
        'accountType': 'LOAN',
        'nickname': 'Overdraft Protection',
        'formattedAccountNumber': '(...6001)',
        'accountNumber': '0000006001-ELC',
        'alternateAccountNumber': '0000006001',
        'coreComponents': {
            'subtype': 'ELC',
            'number': '0000006001',
            'type': '6'
        },
        'isAsset': false,
        'isLiability': true,
        'branchNumber': '1',
        'privileges': {
            'internalTransferFromAllowed': false,
            'internalTransferToAllowed': false,
            'rdcAllowed': false,
            'c2cSendAllowed': false,
            'c2cReceiveAllowed': false,
            'p2pSendAllowed': false,
            'p2pReceiveAllowed': false,
            'externalTransferSendAllowed': false,
            'externalTransferReceiveAllowed': false,
            'loanTransferFromAllowed': false,
            'loanTransferToAllowed': false,
            'statementDeliveryAllowed': true,
            'statementViewingAllowed': true,
            'stopPaymentAllowed': false,
            'textBankingFromAllowed': false,
            'textBankingToAllowed': false,
            'achAllowed': true,
            'wiresAllowed': true,
            'billPayAllowed': false,
            'displayHistoryAllowed': true,
            'displayBalanceAllowed': true,
            'alertsAllowed': true,
            'transferCrossEntityAllowed': false,
            'checkStatusAllowed': false,
            'checkWithdrawalAllowed': false,
            'orderChecksAllowed': false,
            'picturePayAllowed': false,
            'balanceVerificationRequired': false,
            'sweepTransfersAllowed': false,
            'federalTaxPaymentsAllowed': true,
            'viewinginAccountsAllowed': true
        },
        'balances': [
            {
                'type': 'available',
                'amount': 500
            },
            {
                'type': 'current',
                'amount': 1500
            }
        ]
    }
];
@Injectable()
export class AccountService {
    getAccounts() {
        return accounts;
    }
    getAccount(accountId: string) {
        return accounts.find(account => account.accountId === accountId);
    }
}
