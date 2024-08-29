export class Ingredient {
    private _text: string;
    private _image: string;
    private _foodId: string;
    constructor(text: string, image: string, foodId: string) {
        this._text = text;
        this._image = image;
        this._foodId = foodId;
    }
    public get text(): string {
        return this._text;
    }
    public get image(): string {
        return this._image;
    }
    public get foodId(): string {
        return this._foodId;
    }
}
