export const config = {
    // runner: 'local',
    // port: 4723, 

    user: 'JoyferMorito1',
    key: '221a6270-080d-4d3d-a253-a0fc0a8d761c',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        //     {
        //     platformName: 'Android',
        //     'appium:deviceName': 'ebac-qe',
        //     'appium:platformVersion': '9.0',
        //     'appium:automationName': 'UiAutomator2',
        //     'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //     'appium:appWaitActivity': '.MainActivity',
        //     'appium:disableIdLocatorAutocompletion': true
        // }

        {
            platformName: 'Android',
            browserName: 'Chrome',
            'appium:deviceName': 'Samsung Galaxy S9',
            'appium:platformVersion': '10',
            'appium:automationName': 'UiAutomator2',
            "appium:disableIdLocatorAutocompletion": true,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: 'latest',
            },
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot();
    }
}

