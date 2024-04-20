export interface Metadata {
        key:       string;
        value:     string;
        language:  null;
        schema:    Schema;
        element:   string;
        qualifier: null | string;   
}

export enum Schema {
    Arq = "arq",
    Dc = "dc",
}