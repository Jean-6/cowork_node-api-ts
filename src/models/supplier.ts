
enum SupplierType {
    FOODSTUFF = 1,
    MATERIAL = 2,

}

export interface Supplier{
    supplier_name: string, 
    contact_name : string,
    contact_email : string,
    contact_phone : string,
    type : SupplierType,
}