# Hyperledger-Indy-DID
Indy is interoperable with other blockchains or can be used standalone powering the decentralization of identity.

![image](https://github.com/af4092/Hyperledger-Indy-DID/assets/24220136/69d84b88-d4ad-4028-81cc-26033a88afdc)

- [Type: Distributed ledger software](https://www.hyperledger.org/use/hyperledger-indy) - Hyperledger Indy provides tools, libraries, and reusable components for providing digital identities rooted on blockchains or other distributed ledgers so that they are interoperable across administrative domains, applications, and any other silo. Indy is interoperable with other blockchains or can be used standalone powering the decentralization of identity.
- [Indy Official Documentation](https://indy.readthedocs.io/en/latest/) - This is the official documentation for the Hyperledger Indy SDK, which provides a distributed-ledger-based foundation for self-sovereign identity. Indy provides a software ecosystem for private, secure, and powerful identity, and the Indy SDK enables clients for it. The major artifact of the SDK is a c-callable library; there are also convenience wrappers for various programming languages and Indy CLI tool.

![image](https://github.com/af4092/Hyperledger-Indy-DID/assets/24220136/d8813b11-e680-478e-945f-8610c3ed0c08)
  
- [Written by JEON JEONGMIN-Blockchain researcher/KHU Intelligent Networking Lab Master student](https://dennis-jeon.medium.com/hyperledger-indy-fc196c8dc4ff) - Hyperledger Indy : A Blockchain Platfrom for DID/ SSI.
- Indy SDK download and run:
```
git clone https://github.com/hyperledger/indy-sdk
cd indy-sdk/ci
docker build -f ci/indy-pool.dockerfile -t indy_pool .
docker run --name indy_pool -itd -p 9701-9708:9701-9708 indy_pool
```
![image](https://github.com/af4092/Hyperledger-Indy-DID/assets/24220136/1b9e50f5-94de-4d85-bcc4-8816f9460852)


