export const generatePassword = (
    length: number,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean
  ): string => {
    length = Math.min(length, 25);
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
  
    return password;
  };
  