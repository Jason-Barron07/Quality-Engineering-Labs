--  Validates Transaction Log

SELECT * FROM Transactions
WHERE UserID = 102
AND TransactionType = 'CashWithdrawl'
ORDER BY Timestamp DESC;
