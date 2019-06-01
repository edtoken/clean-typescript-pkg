import config from './config'

interface MethodsInterface {
    id: string;
    methodA: () => void;
    methodB: (arg: string) => string;
    methodC: () => string;
}


export default class Methods implements MethodsInterface {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    methodA(): string {
        return `${this.id}-methodA-response`
    }

    methodB(arg: string): string {
        return `${this.id}-methodB-${arg}-response`
    }

    methodC(): string {
        return config.SOME_ENV_VARIABLE;
    }
}
