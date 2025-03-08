declare module '*.module.less' {
    interface ICSSModule {
        [key: string]: string
    }

    const classnames: ICSSModule
    export default classnames
}
