export interface IAddFeesBody {
    ID?: number,
    AcademicYearId? : number,
    FeeNameId? : number,
    AcademicYear? : string,
    Amount? : string,
    EndDate? : string,
    FeeName? : string,
    FeeType? : string,
    StudentId? : number,
    StudentName?: string,
    ClassName?: string,
    ClassId?: number,
    Date?: string

}

export interface IGetFeesDetailsBody {
    ID?: number,
    Amount? : string,
    EndDate? : string,
    FeeName? : string,
    AcademicYear? : string,
    StudentId? : number,
    ClassId?: number,
    ClassName?: string,
    FeeNameId? : number,
    FeeType? : string
}
