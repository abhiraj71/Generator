/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { JobApplicationSnapshot_TalentPool } from './JobApplicationSnapshot_TalentPool';

/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_TalentPool]] entity.
 */
export class JobApplicationSnapshot_TalentPoolRequestBuilder extends RequestBuilder<JobApplicationSnapshot_TalentPool> {
  /**
   * Returns a request builder for retrieving one `JobApplicationSnapshot_TalentPool` entity based on its keys.
   * @param backgroundElementId Key property. See [[JobApplicationSnapshot_TalentPool.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_TalentPool` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_TalentPool> {
    return new GetByKeyRequestBuilder(JobApplicationSnapshot_TalentPool, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationSnapshot_TalentPool` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_TalentPool` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationSnapshot_TalentPool> {
    return new GetAllRequestBuilder(JobApplicationSnapshot_TalentPool);
  }
}
