const operationsQuery = require("../querys/operations");
const constants = require("../constants/constants");
const { manageObtainedValue } = require("../middlewares/paginationQueries");

exports.createOperation = (req, res, next) => {
  operationsQuery.createOperation(req.body.concept, req.body.amount, req.body.date, req.body.type)
    .then(() => {
      res.status(constants.CODE_SUCCESS).send(constants.SUCCESS_OPERATION_CREATE);
    })
    .catch((err) =>
      res.status(constants.CODE_FAILURE_404).send({ message: err.message })
    );
};

exports.getAllOperations = async (req, res, next) => {
  const operations = await operationsQuery.getAllOperations();
  if (operations) {
    res.status(constants.REQ_SUCCESS).send(operations);
  } else {
    res.status(constants.CODE_FAILURE_404);
  };
}

exports.getAllOperationsByPage = async (req, res, next) => {
  const pageAsNumber = parseInt(req.query.page) - 1;
  const sizeAsNumber = parseInt(req.query.size);

  let page = manageObtainedValue(constants.DEFAULT_PAGE_VALUE, pageAsNumber);;
  let size = manageObtainedValue(constants.DEFAULT_SIZE_VALUE, sizeAsNumber);

  const operationsByPage = await operationsQuery.getAllOperationsByPage(page, size);
  if (operationsByPage) {
    res.status(constants.REQ_SUCCESS).send({ content: operationsByPage.rows, totalPages: Math.ceil(operationsByPage.count / size) });
  } else {
    res.status(constants.CODE_FAILURE_404);
  };
}

exports.getLastOperationsByNumber = async (req, res, next) => {
  const numberOfOperations = parseInt(req.params.numberOfOperations);
  const operations = await operationsQuery.getLastOperationsByNumber(numberOfOperations);
  if (operations) {
    res.status(constants.REQ_SUCCESS).send(operations);
  } else {
    res.status(constants.CODE_FAILURE_404);
  };
};
