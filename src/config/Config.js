/**
 * Created by jibin on 17/8/27.
 */

const system = (() => {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    let isIOS = u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    let system;
    if(isAndroid){
        system = 'Android';
    }else if(isIOS){
        system = 'IOS';
    }
    return system;
})();

const projectName = 'Plan-B';
const version = '0.0.1';
const target = process.env.NODE_ENV !== 'production' ? '' : `http://localhost:63342/${projectName}`;


const config = {
    target,
    system,
    projectName,
    version
};

export default config;
