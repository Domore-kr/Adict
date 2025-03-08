declare module '*.module.css' {
    interface ICSSModule {
        [key: string]: string
    }

    const classnames: ICSSModule
    export default classnames
}
