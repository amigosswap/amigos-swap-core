function getNetworkConfig(network, accounts) {
    if(["bsc", "bsc-fork"].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xa050aAB59bB741DcaCf2E6dDBBeB05A10c0ba00f',
        }
    } else if (['bscTestnet', 'bscTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xa050aAB59bB741DcaCf2E6dDBBeB05A10c0ba00f',
        }
    } else if (['development'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xa050aAB59bB741DcaCf2E6dDBBeB05A10c0ba00f',
        }
    } else if (['polygon', 'polygon-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xa050aAB59bB741DcaCf2E6dDBBeB05A10c0ba00f',
        }
    } else if (['polygonTestnet', 'polygonTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xa050aAB59bB741DcaCf2E6dDBBeB05A10c0ba00f',
        }
    } else {
        throw new Error(`No config found for network ${network}.`)
    }
}

module.exports = { getNetworkConfig };
