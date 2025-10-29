FROM mcr.microsoft.com/playwright:v1.56.1

WORKDIR /work

# 必要なフォントをインストール
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    fontconfig \
    fonts-noto \
    fonts-noto-cjk \
    fonts-noto-color-emoji \
    fonts-dejavu-core && \
    apt-get clean && \
    apt-get purge -y fonts-wqy-zenhei && \
    rm -rf /var/lib/apt/lists/*

# フォントキャッシュ更新
RUN fc-cache -fv

# 依存パッケージをインストール
RUN npm install @playwright/test@1.56.1 serve@14.2.5 --no-save
