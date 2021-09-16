# #5 Design patterns

**Factory pattern**

Explain your design decisions. In particular, explain which design pattern(s) you selected
and why.

We have selected the factory pattern, beacause we want to deliver multiple "products" with regards to the user interface and options.

• Explain how the feature selection works from the user perspective.

Feature selections works by adding these features to the factory. The feature factory controlls the features. Currently only the color of the chat and nickname feature are controllable via the feature factory.

**Decorator pattern**

Explain your design decisions. In particular, explain which design pattern(s) you selected
and why.

The decorator pattern was used for the encryption of messages. In the future you might want to add multiple layers of encryption to the messages for some reason. With the decorator pattern you can easily add additional encryption techniques on top of the existing implementations.

• Explain how the feature selection works from the user perspective.

Because security plays such an important role in messaging apps, encryption should be a mandatory feature and not allowed to be turned off.
