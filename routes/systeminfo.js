var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /systeminfo:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: Smart Contract
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       maintenanceMode:
 *                         type: integer
 *                         description: maintenanceMode.
 *                         example: 0
 *                       merchantStatus:
 *                         type: integer
 *                         description: merchantStatus.
 *                         example: 0
 *                       minPayinAmount:
 *                         type: integer
 *                         description: minPayinAmount.
 *                         example: 0
 *                       maxPayinAmount:
 *                         type: integer
 *                         description: maxPayinAmount.
 *                         example: 0
 *                       minPayoutAmount:
 *                         type: integer
 *                         description: minPayoutAmount.
 *                         example: 0
 *                       maxPayoutAmount:
 *                         type: integer
 *                         description: maxPayoutAmount.
 *                         example: 0
 *                       minimum_settlement_amount:
 *                         type: integer
 *                         description: minimum_settlement_amount.
 *                         example: 0
 *                       payinFee:
 *                         type: integer
 *                         description: payinFee.
 *                         example: 0
 *                       payoutFee:
 *                         type: integer
 *                         description: payoutFee.
 *                         example: 0
 *                       rolling_reserve:
 *                         type: integer
 *                         description: rolling_reserve.
 *                         example: 0
*/
 
 router.get('/systeminfo', async (req, res) => {

 })