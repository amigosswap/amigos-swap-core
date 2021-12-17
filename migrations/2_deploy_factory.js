const AmiFactory = artifacts.require("AmiFactory");
const { getNetworkConfig } = require('../migration-config');

module.exports = async function (deployer, network, accounts) {
  const { feeToSetterAddress } = getNetworkConfig(network, accounts);
  await deployer.deploy(AmiFactory, feeToSetterAddress);

  const apeFactory = await AmiFactory.deployed();
  console.log(`INIT_CODE_PAIR_HASH: ${await apeFactory.INIT_CODE_PAIR_HASH()}`)

};
