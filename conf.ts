import {Config, browser} from "protractor"

export let config : Config = {
        framework : "jasmine",
        capabilities : {
            browserName : "chrome",
            chromeOptions: {
                args:['--window-size=1920,1080']
            }
       },
        specs :  ['../outputjs/specs/*.js'],
        seleniumAddress : 'http://localhost:4444/wd/hub'
}