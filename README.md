# Hyperledger-Indy-DID
Indy is interoperable with other blockchains or can be used standalone powering the decentralization of identity.

<p align="center">
  <img src="https://github.com/af4092/Hyperledger-Indy-DID/assets/24220136/69d84b88-d4ad-4028-81cc-26033a88afdc" alt="Image">
</p>

- [Type: Distributed ledger software](https://www.hyperledger.org/use/hyperledger-indy) - Hyperledger Indy provides tools, libraries, and reusable components for providing digital identities rooted on blockchains or other distributed ledgers so that they are interoperable across administrative domains, applications, and any other silo. Indy is interoperable with other blockchains or can be used standalone powering the decentralization of identity.
- [Indy Official Documentation](https://indy.readthedocs.io/en/latest/) - This is the official documentation for the Hyperledger Indy SDK, which provides a distributed-ledger-based foundation for self-sovereign identity. Indy provides a software ecosystem for private, secure, and powerful identity, and the Indy SDK enables clients for it. The major artifact of the SDK is a c-callable library; there are also convenience wrappers for various programming languages and Indy CLI tool.

<p align="center">
  <img src="https://github.com/af4092/Hyperledger-Indy-DID/assets/24220136/6223ce83-1feb-4394-a4da-257e3a9d46d1" alt="Image">
</p>
  
- [Written by JEON JEONGMIN-Blockchain researcher/KHU Intelligent Networking Lab Master student](https://dennis-jeon.medium.com/hyperledger-indy-fc196c8dc4ff) - Hyperledger Indy : A Blockchain Platfrom for DID/ SSI.
- Indy SDK download and run:
```
git clone https://github.com/hyperledger/indy-sdk
cd indy-sdk/ci
docker build -f ci/indy-pool.dockerfile -t indy_pool .
docker run --name indy_pool -itd -p 9701-9708:9701-9708 indy_pool
```

-----------------------

### [Implementation](https://github.com/af4092/Hyperledger-Indy-DID/tree/main/src)

- Implementation is given in the following directory: `src/hostpital1|hospital2|patient|docker-compose.yml`. The Docker Compose configuration sets up a distributed system consisting of an indy-node service (Hyperledger Indy), along with two hospitals (hospital1 and hospital2) and a patient service. Each service is defined with its own Docker image build context, ports, volumes, and dependencies on the indy-node service. The configuration allows these services to be run together using Docker Compose, enabling communication and interaction between them.
- Currently services are running without problem, but work is not finished, services should contact with each other over the Decentralized Network. Work needs to be continued
- Run the following command to start the network and services: `docker-compose up`:

  ![image](https://github.com/af4092/Hyperledger-Indy-DID/assets/24220136/1f154173-fec5-43f8-ab4b-b9a7654aad36)
