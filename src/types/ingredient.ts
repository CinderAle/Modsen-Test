export class Ingredient {
    private _text: string;
    private _image: string;
    constructor(text: string, image: string) {
        this._text = text;
        this._image = image;
    }
    public get text(): string {
        return this._text;
    }
    public get image(): string {
        return this._image;
    }
}
