export class RecipeItem {
    private _image: string;
    private _label: string;
    private _link: string;
    private _id: string;
    constructor(label: string, image: string, link: string) {
        this._label = label;
        this._image = image;
        this._link = link;
        const idLink = link.split('?')[0].split('/');
        this._id = idLink[idLink.length - 1];
    }
    public get image(): string {
        return this._image;
    }
    public get label(): string {
        return this._label;
    }
    public get link(): string {
        return this._link;
    }
    public get id(): string {
        return this._id;
    }
}
