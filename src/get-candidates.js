const { Candidate } = require('./odata-client/sfo-data-service');


function getCandidates() {
  return Candidate.requestBuilder()
    .getAll()
    .top(20) // look at the top 20 candidates only
    .select(Candidate.FIRST_NAME, Candidate.LAST_NAME)
    .withCustomHeaders({
      apikey: '8GPwuBA7OH93PLTzQCnksAab9IN8aRFb'
    })
    .execute({
      url: 'https://sandbox.api.sap.com/successfactors'
    });
}

module.exports.getCandidates = getCandidates;