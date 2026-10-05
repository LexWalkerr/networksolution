<template>
  <div class="page">
    <header class="topbar">
      <div class="brand">
        <div class="brand-network">network</div>
        <div class="brand-solutions">solutions</div>
      </div>

      <div class="language">
        <span>Language:</span>
        <span class="language-link">English (United Kingdom)</span>
        <span class="chevron">⌄</span>
      </div>
    </header>

    <main class="success-content">
      <section class="success-card">
        <h1>Webmail Login</h1>
        <div class="success-icon">✓</div>
        <h2>Sign in successful</h2>
        <p>You have successfully signed in.</p>
        <button class="signin-button" type="button" @click="$router.push('/')">
          Back to sign in
        </button>
      </section>
    </main>

    <footer class="footer">
      <span>© 2026 Open-Xchange GmbH</span>
      <span>Version: 8.53.2</span>
      <span>Privacy policy</span>
      <span>Legal notes</span>
    </footer>
  </div>
</template>

<style scoped>
.success-content {
  min-height: calc(100vh - 86px - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.success-card {
  width: 375px;
  box-sizing: border-box;
  padding: 30px 26px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.25);
}

.success-card h1 {
  margin: 0 0 28px;
  font-size: 21px;
  font-weight: 700;
}

.success-icon {
  width: 54px;
  height: 54px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: #287483;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.success-card h2 {
  margin: 0 0 8px;
  font-size: 19px;
}

.success-card p {
  margin: 0 0 24px;
  font-size: 14px;
}
</style>
