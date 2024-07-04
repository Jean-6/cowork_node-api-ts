
export interface Printer {
    type : string, // jet d'encre | thermique | laser | multifonction
    resolution: string,
    printing_speed : number,
    capacity : number,
    connectivity: string,
    paper_format : string,
    advanced_features: string,
    image : Image[]

}