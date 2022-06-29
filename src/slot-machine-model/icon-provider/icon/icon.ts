export class Icon {
    constructor(private name:string, private imageUrl:string) {

    }

    get iconName() {
        return this.name;
    }

    get iconImageUrl() {
        return this.imageUrl;
    }

}