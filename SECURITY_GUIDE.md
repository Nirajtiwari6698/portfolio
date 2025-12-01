# 🔒 Security Guide - Protect Your Portfolio

This guide helps you secure your portfolio and GitHub repository from unauthorized access.

---

## 🔐 GitHub Personal Access Token Security

### ✅ Best Practices

1. **Token Expiration**
   - Set expiration date: 30-90 days
   - Regenerate tokens regularly
   - Never use tokens that don't expire

2. **Token Scopes**
   - Only select necessary scopes
   - For portfolio: `repo` and `workflow` only
   - Never select `admin:repo_hook` or `admin:org`

3. **Token Storage**
   - Never commit tokens to Git
   - Never share tokens publicly
   - Store in secure password manager
   - Use environment variables for CI/CD

4. **Token Rotation**
   - Regenerate every 30-90 days
   - Delete old tokens immediately
   - Monitor token usage

---

## 🛡️ Repository Security

### Public Repository Settings

Your portfolio repository should be:
- ✅ **Public** - So everyone can see your work
- ✅ **No sensitive data** - No API keys, passwords, tokens
- ✅ **No private information** - No personal data

### What NOT to Commit

❌ **Never commit:**
- API keys
- Database passwords
- Private tokens
- Personal information
- Credit card details
- SSH keys
- Environment secrets

### Environment Variables

Create `.env.local` for sensitive data:

```bash
# .env.local (NOT committed to Git)
VITE_API_KEY=your_key_here
VITE_API_SECRET=your_secret_here
```

Add to `.gitignore`:
```
.env.local
.env.*.local
```

---

## 🔑 GitHub Token Setup (Secure Way)

### Step 1: Create Token Securely

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Set expiration: 30 days
4. Select scopes:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Action workflows)
5. Click "Generate token"
6. **Copy immediately** - You won't see it again!

### Step 2: Store Token Securely

**Option 1: Windows Credential Manager**
```bash
# Store token in Windows Credential Manager
cmdkey /add:github.com /user:Nirajtiwari6698 /pass:your_token_here
```

**Option 2: Git Credential Helper**
```bash
# Configure Git to use credential helper
git config --global credential.helper wincred
```

**Option 3: Password Manager**
- Use 1Password, LastPass, or Bitwarden
- Store token with GitHub URL
- Never write it down

### Step 3: Use Token for Push

```bash
# Git will prompt for credentials
git push origin main

# Enter username: Nirajtiwari6698
# Enter password: (paste your token)
```

---

## 🚫 Prevent Accidental Commits

### Add to .gitignore

```
# Environment variables
.env
.env.local
.env.*.local

# API Keys
.apikey
.secret

# Credentials
credentials.json
secrets.json

# Build files
dist/
node_modules/
.cache/

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db
```

### Pre-commit Hook

Create `.git/hooks/pre-commit`:

```bash
#!/bin/bash

# Check for API keys
if git diff --cached | grep -E "(api_key|password|secret|token)" > /dev/null; then
    echo "❌ ERROR: Potential secrets detected in commit"
    echo "Please remove sensitive data before committing"
    exit 1
fi

exit 0
```

---

## 🔍 Repository Protection

### Enable Branch Protection

1. Go to repository Settings
2. Click "Branches"
3. Click "Add rule"
4. Branch name pattern: `main`
5. Enable:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Dismiss stale pull request approvals

### Disable Force Push

1. Go to repository Settings
2. Click "Branches"
3. Under "Branch protection rules"
4. Disable "Allow force pushes"

---

## 🔐 Two-Factor Authentication

### Enable 2FA on GitHub

1. Go to: https://github.com/settings/security
2. Click "Enable two-factor authentication"
3. Choose method:
   - Authenticator app (recommended)
   - SMS
4. Save recovery codes securely

### Benefits
- ✅ Prevents unauthorized access
- ✅ Protects your repositories
- ✅ Secures your account
- ✅ Required for many organizations

---

## 🛡️ Protect Your Portfolio

### What's Safe in Your Portfolio

✅ **Safe to share:**
- Your name
- Email address
- Phone number
- LinkedIn profile
- GitHub profile
- Project descriptions
- Skills and experience
- Education
- Work history

### What's NOT Safe

❌ **Never include:**
- API keys
- Database passwords
- Private tokens
- Social security number
- Credit card information
- Private addresses
- Personal identification numbers

---

## 🔄 Regular Security Checks

### Weekly
- [ ] Check GitHub notifications
- [ ] Review recent commits
- [ ] Check for security alerts

### Monthly
- [ ] Regenerate personal access tokens
- [ ] Review repository collaborators
- [ ] Check branch protection rules
- [ ] Review GitHub security log

### Quarterly
- [ ] Audit all tokens and keys
- [ ] Review .gitignore file
- [ ] Check for exposed secrets
- [ ] Update dependencies

---

## 🚨 If Token is Compromised

### Immediate Actions

1. **Revoke token immediately:**
   - Go to: https://github.com/settings/tokens
   - Click "Delete" on the token
   - Confirm deletion

2. **Generate new token:**
   - Create new token with same scopes
   - Update local Git configuration
   - Test with new token

3. **Check repository:**
   - Review recent commits
   - Check for unauthorized changes
   - Review collaborators
   - Check GitHub Actions logs

4. **Monitor account:**
   - Check login activity
   - Review connected apps
   - Check authorized OAuth apps
   - Review SSH keys

---

## 📋 Security Checklist

- [ ] Token has expiration date
- [ ] Token has minimal scopes
- [ ] Token stored securely
- [ ] .gitignore configured
- [ ] No secrets in code
- [ ] No secrets in commits
- [ ] 2FA enabled
- [ ] Branch protection enabled
- [ ] Force push disabled
- [ ] Collaborators reviewed
- [ ] SSH keys reviewed
- [ ] OAuth apps reviewed

---

## 🔗 Useful Security Links

- GitHub Security: https://github.com/settings/security
- Personal Access Tokens: https://github.com/settings/tokens
- SSH Keys: https://github.com/settings/keys
- OAuth Apps: https://github.com/settings/applications
- Audit Log: https://github.com/settings/audit-log
- Security Alerts: https://github.com/settings/security-analysis

---

## 💡 Pro Tips

1. **Use SSH instead of HTTPS**
   - More secure than tokens
   - No password needed
   - Automatic authentication

2. **Enable GitHub Copilot Security**
   - Detects secrets in code
   - Prevents accidental commits
   - Alerts on suspicious patterns

3. **Use GitHub Actions Secrets**
   - Store secrets in repository
   - Accessible only in Actions
   - Encrypted and secure

4. **Monitor Dependencies**
   - Enable Dependabot
   - Get security alerts
   - Auto-update vulnerable packages

---

## 🎯 Summary

Your portfolio is secure when:
- ✅ No sensitive data in code
- ✅ Tokens have expiration dates
- ✅ Repository is public (not private)
- ✅ 2FA is enabled
- ✅ Branch protection is enabled
- ✅ Regular security checks performed
- ✅ Tokens are rotated regularly
- ✅ .gitignore is properly configured

---

**Keep your portfolio secure and your GitHub account safe!** 🔒

For more information, visit: https://docs.github.com/en/code-security
