import Errors from './errors';
import { CardService } from './card';
import { VAService } from './va';
import { DisbursementService } from './disbursement';
import { InvoiceService } from './invoice';
import { PayoutService } from './payout';
import { RecurringPayment } from './recurring';
import { XenditOptions } from './xendit_opts';
import { EWalletService } from './ewallet';
import { RetailOutletService } from './retail_outlet';

export = class Xendit {
  constructor(opts: XenditOptions);
  static Errors = Errors;
  Card: typeof CardService;
  VirtualAcc: typeof VAService;
  Disbursement: typeof DisbursementService;
  Invoice: typeof InvoiceService;
  Payout: typeof PayoutService;
  RecurringPayment: typeof RecurringPayment;
  EWallet: typeof EWalletService;
  RetailOutlet: RetailOutletService;
};
