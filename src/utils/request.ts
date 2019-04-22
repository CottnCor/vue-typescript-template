/*
 * httpXX
 */

import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import { CURRENT_HOST, IS_PROD, IS_MOCK, CONMOM_PRAMS } from '@/config';

const httpStatus = {
    OK: 200,
    MOVED: 302,
    BAD: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    TOO_LARGE: 413,
    ERROR: 500,
    NOT_IMPLEMENTED: 501
};

/**
 */
export default class Request {
    private get host(): string {
        return CURRENT_HOST;
    }

    private get isMock(): boolean {
        return IS_MOCK;
    }

    private get isProd(): boolean {
        return IS_PROD;
    }

    /**
     * @param  {string} url
     * @param  {any} param?
     * @param  {AxiosRequestConfig} option?
     */
    public get(url: string, param?: any, option?: AxiosRequestConfig) {
        return axios
            .get(this.host + url, { params: param, timeout: 5000 })
            .then((res) => this.handelResponse(res))
            .then((result) => this.handleError(result));
    }

    /**
     * @param  {string} url
     * @param  {any} body
     * @param  {any} param?
     * @param  {AxiosRequestConfig} option?
     */
    public post(url: string, body: any, param?: any, option?: AxiosRequestConfig) {
        return axios
            .post(this.host + url, { params: param, timeout: 5000 })
            .then((res) => this.handelResponse(res))
            .then((result) => this.handleError(result));
    }

    /**
     * @param  {string} url
     * @param  {any} body?
     * @param  {any} param?
     * @param  {AxiosRequestConfig} option?
     */
    public put(url: string, body?: any, param?: any, option?: AxiosRequestConfig) {
        return axios
            .put(this.host + url, body, { timeout: 5000, params: param })
            .then((res) => this.handelResponse(res))
            .then((result) => this.handleError(result));
    }

    /**
     * @param  {string} url
     * @param  {any} param?
     * @param  {AxiosRequestConfig} option?
     */
    public delete(url: string, param?: any, option?: AxiosRequestConfig) {
        return axios
            .delete(this.host + url, { params: param, timeout: 5000 })
            .then((res) => this.handelResponse(res))
            .then((result) => this.handleError(result));
    }

    private handelResponse(res: AxiosResponse): { ok: boolean; data: any } {
        switch (res.status) {
            case httpStatus.OK:
                return { ok: true, data: res.data };
            case httpStatus.MOVED:
                return { ok: false, data: `XXXX` + res.data };
            case httpStatus.BAD:
                return { ok: false, data: res.data ? res.data : 'XXXX' };
            case httpStatus.UNAUTHORIZED:
                return { ok: false, data: res.data ? res.data : 'XXXXXXXX' };
            case httpStatus.NOT_FOUND:
                return { ok: false, data: res.data ? res.data : 'XXXXXX' };
            case httpStatus.TOO_LARGE:
                return { ok: false, data: res.data ? res.data : 'XXXXXXXX' };
            case httpStatus.ERROR:
                return { ok: false, data: res.data ? res.data : 'XXXXXXX，XXXXXX' };
            case httpStatus.NOT_IMPLEMENTED:
                return {
                    ok: false,
                    data: res.data ? res.data : 'XXXXXXXXXXX，XXXXXX'
                };
            default:
                return {
                    ok: false,
                    data: res.data ? res.data : 'XXXX,  status' + res.status
                };
        }
    }

    private handleError(result: { ok: boolean; data: any }) {
        if (result.ok) {
            return result.data;
        } else {
            this.showError(result.data);
            return false;
        }
    }

    private showError(msg: string) {
        if (this.isProd) {
            // ..XXXXXXXXXX
            console.log(msg);
        } else {
            console.log(msg);
        }
    }
}
