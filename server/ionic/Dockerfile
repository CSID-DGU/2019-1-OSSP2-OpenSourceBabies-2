FROM ubuntu:18.04
LABEL uijeong <uiui_97@naver.com>

# ---------------------
# Environment variables
# ---------------------
ENV GIT_EMAIL="mjsk0583@naver.com" \
    GIT_NAME="ui-jeong"

ENV NODE_VERSION=11.11.0
ENV NPM_VERSION=latest
ENV IONIC_VERSION=latest
ENV CORDOVA_VERSION=latest

ENV GRADLE_VERSION=3.5
ENV ANDROID_BUILD_TOOLS_VERSION=25.0.3
ENV ANDROID_PLATFORMS="android-16 android-17 android-18 android-19 android-20 android-21 android-22 android-23 android-24 android-25"

ENV ANDROID_HOME /opt/android-sdk-linux
ENV GRADLE_HOME /opt/gradle
ENV PATH ${PATH}:${GRADLE_HOME}/bin:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools

# -------
# install
# -------
RUN \
  dpkg --add-architecture i386 \
  && apt-get update -y \
  && apt-get install -y \
    # tools
    curl \
    wget \
    zip \
    git \
    unzip ruby xdg-utils links links2 w3m nano \
    # android-sdk dependencies
    libc6-i386 \
    lib32stdc++6 \
    lib32gcc1 \
    lib32ncurses5 \
    lib32z1 \
    qemu-kvm \
    kmod
# configure git
RUN git config --global user.email "${GIT_EMAIL}"
RUN git config --global user.name "${GIT_NAME}"

# Add terminal color scheme
RUN echo 'export PS1="\[$(tput bold)\]\[$(tput setaf 6)\]\u\[$(tput setaf 1)\] @ \[$(tput setaf 2)\]\h\[$(tput setaf 4)\] \w \[$(tput setaf 1)\]$ \[$(tput sgr0)\]"' >> ~/.bashrc
RUN . ~/.bashrc


# Install Java
RUN apt-get install -y --no-install-recommends openjdk-8-jdk

# Install Node and NPM
RUN \
  apt-get update -qqy \
  && curl --retry 3 -SLO "http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" \
  && tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 \
  && rm "node-v$NODE_VERSION-linux-x64.tar.gz" \
  && npm install -g npm@"$NPM_VERSION" \
  && npm install -g cordova@"$CORDOVA_VERSION" ionic@"$IONIC_VERSION" \
  && npm install -g karma-cli@latest \
  && npm install --save express
# Download and install Gradle
RUN \
  cd /opt \
  && wget -q https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip \
  && unzip gradle*.zip \
  && ls -d */ | sed 's/\/*$//g' | xargs -I{} mv {} gradle \
  && rm gradle*.zip

# Download an install the latest Android SDK
RUN \
  mkdir -p $ANDROID_HOME && cd $ANDROID_HOME \
  && wget -q $(wget -q -O- 'https://developer.android.com/sdk' | \
     grep -o "\"https://.*android.*tools.*linux.*\"" | sed "s/\"//g") \
  && unzip *tools*linux*.zip \
  && rm *tools*linux*.zip

# Accept the license agreements of the SDK components
RUN \
  export ANDROID_LICENSES="$ANDROID_HOME/licenses" \
  && [ -d $ANDROID_LICENSES ] || mkdir $ANDROID_LICENSES \
  && [ -f $ANDROID_LICENSES/android-sdk-license ] || echo 8933bad161af4178b1185d1a37fbf41ea5269c55 > $ANDROID_LICENSES/android-sdk-license \
  && [ -f $ANDROID_LICENSES/android-sdk-preview-license ] || echo 84831b9409646a918e30573bab4c9c91346d8abd > $ANDROID_LICENSES/android-sdk-preview-license \
  && [ -f $ANDROID_LICENSES/intel-android-extra-license ] || echo d975f751698a77b662f1254ddbeed3901e976f5a > $ANDROID_LICENSES/intel-android-extra-license 
RUN unset ANDROID_LICENSES
  
# awscli
# RUN apt-get update && \
#     apt-get install -y \
#         python3 \
#         python3-pip \
#         python3-setuptools \
#         groff \
#         less \
#     && pip3 install --upgrade pip \
#     && apt-get clean

# RUN pip3 --no-cache-dir install --upgrade awscli

# -----------------------------------------------------------------------------
# Post-install
# -----------------------------------------------------------------------------

RUN \
  sdkmanager \
    "platform-tools" \
    "build-tools;$ANDROID_BUILD_TOOLS_VERSION"

RUN \
  for i in ${ANDROID_PLATFORMS}; do sdkmanager "platforms;$i"; done

WORKDIR /project
EXPOSE 8100 35729 53703
CMD ionic serve

# --------
# Clean up
# --------
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
