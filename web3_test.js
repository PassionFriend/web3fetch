const Web3 = require("web3");
const express = require('express')
const app = express()
const port = 4000

var web3 = new Web3(new Web3.providers.HttpProvider('http://164.92.212.83:8545'));
var MyContract = new web3.eth.Contract(
    [{"type":"event","name":"Add_Chargeback","inputs":[{"type":"uint256","name":"payInRequestId","internalType":"uint256","indexed":false},{"type":"uint256","name":"chargebackId","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"bytes32","name":"infoHash","internalType":"bytes32","indexed":false}],"anonymous":false},{"type":"event","name":"Complete_Payout","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256","indexed":false},{"type":"bytes32","name":"infoHash","internalType":"bytes32","indexed":false}],"anonymous":false},{"type":"event","name":"Complete_Purchase","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Harvest","inputs":[{"type":"uint256","name":"releaseIndex","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"chargeback","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"type":"uint8","name":"version","internalType":"uint8","indexed":false}],"anonymous":false},{"type":"event","name":"Make_Settlement","inputs":[{"type":"uint256","name":"settlementId","internalType":"uint256","indexed":false},{"type":"uint256","name":"subSettlementId","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Request_Payin","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256","indexed":false},{"type":"tuple","name":"request","internalType":"struct DigirePaySubchain.PayInRequest","indexed":false,"components":[{"type":"uint256","name":"customerId","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"fee_amount","internalType":"uint256"},{"type":"uint256","name":"chargebackId","internalType":"uint256"},{"type":"address","name":"merchant","internalType":"address"},{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.PayInRequestStatus"}]}],"anonymous":false},{"type":"event","name":"Request_Payout","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256","indexed":false},{"type":"tuple","name":"request","internalType":"struct DigirePaySubchain.PayOutRequest","indexed":false,"components":[{"type":"uint256","name":"customerId","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"fee_amount","internalType":"uint256"},{"type":"bytes32","name":"accountInfo","internalType":"bytes32"},{"type":"bytes32","name":"infoHash","internalType":"bytes32"},{"type":"address","name":"merchant","internalType":"address"},{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.PayOutRequestStatus"},{"type":"string","name":"remark","internalType":"string"}]}],"anonymous":false},{"type":"event","name":"Set_Minimum_Settlement_Amount","inputs":[{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Set_Payin_Amount_Limit","inputs":[{"type":"uint256","name":"min_amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"max_amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Set_Payin_Request_Status","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256","indexed":false},{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.PayInRequestStatus","indexed":false}],"anonymous":false},{"type":"event","name":"Set_Payout_Amount_Limit","inputs":[{"type":"uint256","name":"min_amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"max_amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Set_Settlement_Ratio","inputs":[{"type":"uint256","name":"ratio","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"Digire","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add_chargeback","inputs":[{"type":"uint256","name":"payInRequestId","internalType":"uint256"},{"type":"uint256","name":"chargebackId","internalType":"uint256"},{"type":"bytes32","name":"infoHash","internalType":"bytes32"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"bscAddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"complete_payout","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256"},{"type":"bytes32","name":"infoHash","internalType":"bytes32"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"get_customer_id","inputs":[{"type":"bytes32","name":"customerEmailHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"releaseIndex","internalType":"uint256"},{"type":"uint256","name":"pendingAmount","internalType":"uint256"}],"name":"get_pending_rolling_reserve","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"tuple[]","name":"","internalType":"struct DigirePaySubchain.ReleaseInfo[]","components":[{"type":"uint256","name":"releaseDate","internalType":"uint256"},{"type":"uint256","name":"releaseAmount","internalType":"uint256"}]}],"name":"get_release_info","inputs":[{"type":"uint256","name":"from","internalType":"uint256"},{"type":"uint256","name":"length","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"get_release_length","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"get_settings_hash","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"pendingAmount","internalType":"uint256"}],"name":"harvest","inputs":[{"type":"uint256","name":"releaseIndex","internalType":"uint256"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"init","inputs":[{"type":"address","name":"_digire","internalType":"contract IERC20"},{"type":"uint256","name":"_merchantId","internalType":"uint256"},{"type":"address","name":"_merchantAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maintenanceMode","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"make_settlement_for_merchant","inputs":[{"type":"uint256","name":"settlement_id","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"},{"type":"bytes","name":"signature","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxPayinAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxPayoutAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"merchantAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"merchantId","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"enum DigirePaySubchain.MerchantStatus"}],"name":"merchantStatus","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minPayinAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minPayoutAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minimum_settlement_amount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nonce","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"paid_rolling_reserve_amount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"customerId","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"fee_amount","internalType":"uint256"},{"type":"uint256","name":"chargebackId","internalType":"uint256"},{"type":"address","name":"merchant","internalType":"address"},{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.PayInRequestStatus"}],"name":"payInRequests","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"payOutRequestCount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"customerId","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"fee_amount","internalType":"uint256"},{"type":"bytes32","name":"accountInfo","internalType":"bytes32"},{"type":"bytes32","name":"infoHash","internalType":"bytes32"},{"type":"address","name":"merchant","internalType":"address"},{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.PayOutRequestStatus"},{"type":"string","name":"remark","internalType":"string"}],"name":"payOutRequests","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"payinFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"payin_payout_ratio_limit","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"payoutFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"prevSequenceHash","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"process_payin","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"refund_payout_request","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reject_payout_request","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"releasedIndex","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"request_payin","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256"},{"type":"bytes32","name":"customerEmailHash","internalType":"bytes32"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"},{"type":"bytes","name":"signature","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"request_payout","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256"},{"type":"bytes32","name":"customerEmailHash","internalType":"bytes32"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"bytes32","name":"accountInfo","internalType":"bytes32"},{"type":"string","name":"remark","internalType":"string"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"},{"type":"bytes","name":"signature","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"rolling_reserve","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"rolling_reserve_period","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"sequenceCount","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_bsc_address","inputs":[{"type":"address","name":"bsc_address","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_maintenance_mode","inputs":[{"type":"uint256","name":"mode","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_merchant_address","inputs":[{"type":"address","name":"merchant_address","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_merchant_status","inputs":[{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.MerchantStatus"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_minimum_settlement_amount","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_payin_amount_limit","inputs":[{"type":"uint256","name":"min_amount","internalType":"uint256"},{"type":"uint256","name":"max_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_payin_fee","inputs":[{"type":"uint256","name":"_payinFee","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_payin_payout_ratio_limit","inputs":[{"type":"uint256","name":"ratio","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_payin_request_status","inputs":[{"type":"uint256","name":"requestId","internalType":"uint256"},{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.PayInRequestStatus"},{"type":"bytes32","name":"sequenceHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_payout_amount_limit","inputs":[{"type":"uint256","name":"min_amount","internalType":"uint256"},{"type":"uint256","name":"max_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_payout_fee","inputs":[{"type":"uint256","name":"_payoutFee","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_rolling_reserve","inputs":[{"type":"uint256","name":"_rolling_reserve","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set_settlement_ratio","inputs":[{"type":"uint256","name":"ratio","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"settlementCount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"settlementTimestamp","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"settlement_ratio","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"id","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"createdAt","internalType":"uint256"},{"type":"uint256","name":"processedAt","internalType":"uint256"},{"type":"uint8","name":"status","internalType":"enum DigirePaySubchain.SettlementStatus"}],"name":"settlements","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalChargeback","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalChargebackPaid","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"total_payins_processed","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"total_payouts_processed","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"total_rolling_reserve_amount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"total_settled_amount","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]}]
    , "0x7b4715C1d46C9fc658E9934D5f2eDC67956cF94C");

app.get('/systeminfo', async (req, res) => {
    let methods_name = ['maintenanceMode', 'merchantStatus', 'minPayinAmount', 'maxPayinAmount', 'minPayoutAmount', 'maxPayoutAmount', 'minimum_settlement_amount', 'payinFee', 'payoutFee', 'rolling_reserve'];
    var batch = new web3.BatchRequest();
    var p = methods_name.map(v => {
      return new Promise((resolve, reject) => {
        var request = MyContract.methods[v]().call.request({}, (err, data) => {
          if (err) reject(err);
          else resolve(data);
        })
        batch.add(request);
      })
    })
    batch.execute();
    res.send(await Promise.all(p));
    //res.send(await Promise.all(methods_name.map( v => MyContract.methods[v]().call())));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
const swaggerUi = require('swagger-ui-express');

// ...

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));