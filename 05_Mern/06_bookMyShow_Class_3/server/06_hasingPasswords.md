## Hashing Password with Bcrypt.

# There are three general guidelines for security basis on which we design our backend.

    a. Zero Trust Model: "Never Trust, Always Verify.

        i. Assume that no one (neither inside nor outside the
        network) is trustworthy. This means always verifying
        the authenticity of users, services, and systems
        before granting access to resources.

        ii. Implement strong authentication mechanisms,
        validate and sanitize all inputs, and regularly audit
        logs and activities.

    b. Principle of Least Privilege: "Minimal Access for Maximum
       Security”

        i. Each user, program, or system should have the least
        amount of privilege necessary to perform its function.
        This limits the potential damage in case of a security
        breach.
    
    c. Reduce Attack Surface: "Minimize Risk by Minimizing
       Exposure"
       
        i. The attack surface refers to the total number of
        points (like software, services, and ports) where an
        unauthorized user can try to enter data or extract data
        from the environment. Reducing the attack surface
        minimizes the potential entry points for attackers.

## Using commonly used Passwords.

1. Predictability of Hashes:
    a. For a given input and a known hashing algorithm, the
    generated hash will always be the same.
    
    b. Example:
    
        - For the input "password", the hash might be
        asfdad123r2#$%.

        - For the input "12345678", the hash might be asd12!@#%.

2. Brute Force Attacks:
    a. If an attacker wants to break into a system, the first step
    they might take is to perform a brute force attack using a
    dictionary of the most commonly used passwords and their
    corresponding hashes.

3. The Role of Salting:

   a. Modern password hashing techniques use a 'salt' - a
   random value added to the password before hashing.
   
   b. This ensures that even common passwords result in unique
    hashes. For example, "password" with different salts won't 
    hash to asfdad123r2#$% every time.

4. Why Salting Matters:
  
   a. Without salting, common passwords remain vulnerable
   because their hashes can be precomputed and stored in
   lookup tables (rainbow tables).

   b. Even if a system uses salts, if the salt is known to the
   attacker, they can still perform targeted attacks, but the use
   of unique salts for each password significantly increases
   the complexity and time required for such attacks.

5. Generate a hash for password here - 
   https://www.md5hashgenerator.com/

6. Decrypt the hash here -
   https://10015.io/tools/md5-encrypt-decrypt#google_vignette