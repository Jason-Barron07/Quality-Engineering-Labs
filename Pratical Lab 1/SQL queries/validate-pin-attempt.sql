--  Validate PIN Attempt Counter

SELECT PinAttemptCount, IsLocked FROM Users
WHERE UserID = 102;