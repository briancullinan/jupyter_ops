FROM jupyter/nbviewer

USER root
RUN apt-get -qq update
RUN apt-get install -y wget
RUN wget -O - https://deb.nodesource.com/setup_6.x | bash
RUN apt-get install -y nodejs g++ make software-properties-common libzmq3-dev

RUN mkdir -p $HOME/jupyter-nodejs
COPY . $HOME/jupyter-nodejs
RUN chown -R root $HOME/jupyter-nodejs
WORKDIR $HOME/jupyter-nodejs
RUN touch /etc/ld.so.conf
RUN echo "/opt/conda/lib" >> /etc/ld.so.conf

# RUN add-apt-repository ppa:chris-lea/zeromq -y
# RUN add-apt-repository ppa:chris-lea/libpgm -y
# RUN apt-get update
RUN conda install -y jupyter_console

USER root
RUN mkdir -p $HOME/.ipython/kernels/nodejs/
RUN npm install
RUN node install.js
RUN npm run build
RUN npm run build-ext
WORKDIR $HOME/jupyter-nodejs/node_modules/zmq/
RUN npm run install

USER root
WORKDIR $HOME/jupyter-nodejs
RUN ldconfig

EXPOSE 8888
