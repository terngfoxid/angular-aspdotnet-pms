import { Image } from "./image.model";

export class Album {
    id: string|number|null|undefined = 0;
    name: string|null|undefined = null;
    coverImageUrl: string|null|undefined = null;
    createDate : Date|null|undefined = null;
    updateDate : Date|null|undefined = null;
    isDelete : boolean|null|undefined = null;
    images: Image[] |null|undefined = [];
}