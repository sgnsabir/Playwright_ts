# Use official Playwright image with Node.js and dependencies
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all project files
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Install OpenJDK and Allure CLI
RUN apt-get update && \
    apt-get install -y openjdk-11-jre wget unzip xvfb && \
    wget https://github.com/allure-framework/allure2/releases/download/2.27.0/allure-2.27.0.tgz && \
    tar -zxvf allure-2.27.0.tgz && \
    mv allure-2.27.0 /opt/allure && \
    ln -s /opt/allure/bin/allure /usr/bin/allure && \
    rm allure-2.27.0.tgz && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Expose Allure UI port
EXPOSE 5000

# Entry script handles headless or headed mode
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]
