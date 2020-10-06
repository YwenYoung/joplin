import Plugin from '../Plugin';
import { ViewHandle } from '../utils/createViewHandle';
import { ButtonSpec } from '../WebviewController';
export default class JoplinViewsDialogs {
    private store;
    private plugin;
    constructor(plugin: Plugin, store: any);
    private controller;
    create(): Promise<string>;
    setHtml(handle: ViewHandle, html: string): Promise<string>;
    setButtons(handle: ViewHandle, buttons: ButtonSpec[]): Promise<ButtonSpec[]>;
    open(handle: ViewHandle): Promise<unknown>;
}