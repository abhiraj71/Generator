/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder } from './JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "JobApplicationSnapshot_OutsideWorkExperience" of service "SFOData".
 */
export declare class JobApplicationSnapshot_OutsideWorkExperience extends Entity implements JobApplicationSnapshot_OutsideWorkExperienceType {
    /**
     * Technical entity name for JobApplicationSnapshot_OutsideWorkExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_OutsideWorkExperience.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * Background Element Id.
     */
    backgroundElementId: BigNumber;
    /**
     * Background Order Position.
     */
    bgOrderPos: BigNumber;
    /**
     * Type of Business.
     * @nullable
     */
    businessType?: string;
    /**
     * Company Name.
     * @nullable
     */
    employer?: string;
    /**
     * Employer Address.
     * @nullable
     */
    employerAddress?: string;
    /**
     * Employer City.
     * @nullable
     */
    employerCity?: string;
    /**
     * Employer Contact Name.
     * @nullable
     */
    employerContact?: string;
    /**
     * Employer Country.
     * @nullable
     */
    employerCountry?: string;
    /**
     * Employer Contact Email.
     * @nullable
     */
    employerEmail?: string;
    /**
     * Employer Phone.
     * @nullable
     */
    employerPhone?: string;
    /**
     * Employer State.
     * @nullable
     */
    employerState?: string;
    /**
     * Employer Zip Code.
     * @nullable
     */
    employerZip?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Is this your present employer?.
     * @nullable
     */
    presentEmployer?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Title.
     * @nullable
     */
    startTitle?: string;
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_OutsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_OutsideWorkExperience, JobApplicationSnapshot_OutsideWorkExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_OutsideWorkExperience` entity type.
     * @returns A `JobApplicationSnapshot_OutsideWorkExperience` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_OutsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobApplicationSnapshot_OutsideWorkExperienceType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    businessType?: string;
    employer?: string;
    employerAddress?: string;
    employerCity?: string;
    employerContact?: string;
    employerCountry?: string;
    employerEmail?: string;
    employerPhone?: string;
    employerState?: string;
    employerZip?: string;
    endDate?: Moment;
    lastModifiedDateTime: Moment;
    presentEmployer?: string;
    startDate?: Moment;
    startTitle?: string;
}
export interface JobApplicationSnapshot_OutsideWorkExperienceTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    businessType: string;
    employer: string;
    employerAddress: string;
    employerCity: string;
    employerContact: string;
    employerCountry: string;
    employerEmail: string;
    employerPhone: string;
    employerState: string;
    employerZip: string;
    endDate: Moment;
    lastModifiedDateTime: Moment;
    presentEmployer: string;
    startDate: Moment;
    startTitle: string;
}
export declare namespace JobApplicationSnapshot_OutsideWorkExperience {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_TYPE: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_ADDRESS: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_CITY: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_CONTACT: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_COUNTRY: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_EMAIL: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_PHONE: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_STATE: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[employerZip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_ZIP: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[presentEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRESENT_EMPLOYER: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the [[startTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TITLE: StringField<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * All fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_OutsideWorkExperience> | StringField<JobApplicationSnapshot_OutsideWorkExperience> | DateField<JobApplicationSnapshot_OutsideWorkExperience>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * All key fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_OutsideWorkExperience>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_OutsideWorkExperience.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_OutsideWorkExperience>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_OutsideWorkExperience.d.ts.map