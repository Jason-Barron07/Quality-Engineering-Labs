--  Validates Transaction Log

SELECT * FROM Transactions
WHERE UserID = 102
AND TransactionType = 'CashWithdrawl'
ORDER BY Timestamp DESC;

-- Validate Balance

SELECT WalletBalance FROM Wallets
WHERE UserID = 102;

-- Validate Ledger Entry

SELECT * FROM Ledger
WHERE RefTransactionID = 123345;

--  Validate PIN Attempt Counter

SELECT PinAttemptCount, IsLocked FROM Users
WHERE UserID = 102;

--  Validate Timestamp

SELECT Timestamp FROM Transactions
WHERE TransactionID = 123345;


-- Validate No Negative Balance

SELECT * FROM Wallets WHERE Balance < 0;
