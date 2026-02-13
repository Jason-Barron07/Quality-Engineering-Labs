// POST /api/v1/wallet/withdraw

// Request Body
{
  "userId"= 102,
  "amount"= 200,
  "pin"= "1234"
}

//  Expected Responses 200 OK

{
  "status"= "success",
  "transactionId"= "TXN12345",
  "newBalance"= 800
}

// 400 Bad Request (Below minimum)

{
  "errorCode"= "INVALID_AMOUNT",
  "message"= "Minimum withdrawal is R10"
}

// - 401 Unauthorized
// - Invalid token
// - 403 Forbidden
// - Account locked

// -----------------------------------------------------------------------------------------------

// Insufficient Funds

{
  "userId"= 102,
  "amount"= 1500,
  "pin"= "1234"
}

// Pre-condition
// Wallet balance = 1000
// Expected Response
// Status Code: 409 Conflict

{
  "errorCode"= "insufficient_funds",
  "message"= "Withdrawal amount exceeds available balance."
}



// -----------------------------------------------------------------------------------------------


//  Account Locked (Too Many PIN Attempts)


{
  "userId"= 102,
  "amount"= 100,
  "pin"= "1234"
}

// Pre-condition
// Account is locked due to 3 failed PIN attempts
// Expected Response
// Status Code: 403 Forbidden

{
  "errorCode"= "Account_Locked",
  "message"= "Account is temporarily locked due to multiple failed PIN attempts."
}

// -----------------------------------------------------------------------------------------------

// Invalid Amount Format (Negative numbers)

{
  "userId"= 102,
  "amount"= -50,
  "pin"= "1234"
}

// Expected Response

// Status Code: 400 Bad Request

{
  "errorCode"= "Invalid_amount",
  "message"= "Withdrawal amount must be a positive number greater than minimum allowed."
}
