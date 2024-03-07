import { Album } from "./album.model";

export class Image {
    id: string|number|null|undefined = 0;
    albumId: string|number|null|undefined = 0;
    imageUrl: string|null|undefined = null;
    createDate : Date|null|undefined = null;
    updateDate : Date|null|undefined = null;
    isDelete : boolean|null|undefined = null;
    album : Album|null|undefined = null;
}