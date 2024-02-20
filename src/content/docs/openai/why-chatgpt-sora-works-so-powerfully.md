---
title: Why ChatGPT Sora Works So Powerfully?
description: This article provides an overview of the Sora model and its performance in generating high-definition videos.
---

> On 15th February 2024, OpenAI released a new large-scale video model called **"Sora."**

![](https://assets.offshoreview.xyz/zfile/new-docu/2843069aa8c7fa15922eb75f4d5d6f5b.png)

The Sora model can generate high-definition videos up to 60 seconds long, depicting scenes, actions, or stories with remarkable realism. It effectively captures the interplay of light and shadow, the physical interactions between objects, and delivers smooth and variable camera movements.

You may have seen numerous articles on your social media feeds showcasing OpenAI's official demo videos. Due to security concerns regarding the generated content, Sora has not yet been made available for testing, preventing us from providing further detailed information. 

## Why Sora?

Now, let's focus on why Sora's performance seems to surpass other text-to-video models we've seen in the market and what sets them apart.

:::tip
In case you didn’t see the video yet, we still put a sample video. 
:::

> Prompts here: *A stylish woman walks down a Tokyo street filled with warm glowing neon and animated city signage. She wears a black leather jacket, a long red dress, and black boots, and carries a black purse. She wears sunglasses and red lipstick. She walks confidently and casually. The street is damp and reflective, creating a mirror effect of the colorful lights. Many pedestrians walk about.*

<video controls width="600">
  <source src="https://cdn.openai.com/sora/videos/tokyo-walk.mp4" type="video/mp4">
</video>

In the field of text-to-video generation, common model approaches include **Recurrent Neural Networks (RNNs)**, **Generative Adversarial Networks (GANs)**, and **Diffusion Models**. The Sora model introduced by OpenAI **belongs to the Diffusion Model category.**

While GAN models have been popular previously, the field of image and video generation is **currently dominated by diffusion models.**

## The Pricinples of Diffusion Models

Diffusion models offer remarkable advantages over GANs, with better diversity in generation and more stable training. Importantly, diffusion models have a higher ceiling for image and video generation. GAN models, fundamentally based on machine imitation, lack the creativity inherent in diffusion models, **making their potential limitations more apparent.**

To put it simply, GAN models are like hardworking painters, but they lack control. They tirelessly paint based on previous works (training data) while receiving continuous feedback from a teacher (discriminator). After countless rounds of this process, they eventually produce realistic images. However, this process is not always controllable, leading to occasional outputs that are difficult to understand. Moreover, their improvement process primarily involves imitation, resulting in a potential creativity ceiling.

![GAN models](https://assets.offshoreview.xyz/zfile/new-docu/29a9360d8ef594849faf3570c5049fd9.png)

On the other hand, **Diffusion Models are like diligent and intelligent artists. Instead of mechanical imitation**, they learn the intrinsic qualities and relationships within a vast corpus of existing works. They understand what constitutes "beauty" and "style" in images, resembling more thoughtful creators compared to GANs.

![Diffusion Models](https://assets.offshoreview.xyz/zfile/new-docu/85fe1bdec9b699aa56b8ef437bd55155.png)

In essence, OpenAI's choice of the diffusion model paradigm for creating text-to-video models is a promising direction, as it harnesses the potential of a more creative approach.

Another question arises: given that many competitors are also working on diffusion models, why does OpenAI's model appear more impressive?

The answer lies in OpenAI's mindset: **having achieved tremendous success with large language models in the past, they wondered if they could replicate this success with a new endeavor.**

**The answer is affirmative.**

OpenAI attributes the success of previous large language models to **Tokens**, which elegantly unify code, mathematics, and various natural languages, enabling large-scale training. Consequently, they introduced the concept of "Patch" corresponding to Tokens for training the Sora video model.

![](https://assets.offshoreview.xyz/zfile/new-docu/9add41adf1bb66375a726ae1711049ef.png)

In reality, the success of Tokens in large language models owes much to the Transformer architecture, with which Tokens are intricately paired. **Therefore, Sora, as a video generation diffusion model, differs from mainstream video generation diffusion models by adopting the Transformer architecture.** (Mainstream video generation diffusion models mostly employ the U-Net architecture.)

This means that OpenAI **triumphed in its choice of experience and technological direction.**

## Why is the OpenAI?

However, the Transformer architecture, known as the "key to success," is widely recognized as mainstream in text and image generation. Why did others not consider using it for video generation while OpenAI did?

This stems from another issue: the memory requirements of the full attention mechanism in the Transformer architecture grow quadratically with the length of the input sequence. Therefore, when dealing with **high-dimensional** signals such as video, t**he computational cost becomes extraordinarily high.**

In simpler terms, although using Transformer yields good results, the required computational resources are also exceptionally high, making it economically impractical.

Of course, although OpenAI has secured various financing, they have not recklessly poured resources into the project. Instead, they devised another approach to address the high computational costs.

Here, we introduce the concept of **"latent"** which is a form of dimensionality reduction or compression **aimed at expressing the essence of information with fewer details.** To illustrate, it's akin to recording the structure of a simple three-dimensional object using just three views, rather than preserving the object itself.

For this purpose, OpenAI developed a video compression network to reduce the dimensionality of videos to latent space. Subsequently, **they utilized these compressed video data to generate patches, thereby reducing the input information and effectively alleviating the computational burden imposed by the Transformer architecture.**

With this approach, most issues were resolved, enabling OpenAI to successfully integrate the video generation model into the paradigm of their immensely successful large language models. As a result, achieving unsatisfactory results became challenging.

Additionally, OpenAI adopted a slightly different training approach. **They opted for training on the "original size and duration" of videos, as opposed to the industry-standard practice of training on videos cropped to predefined standard sizes and durations.**

This training approach offers several benefits for Sora:

1. Customizable video duration
2. Flexible video dimensions
3. Enhanced framing and composition

The first two benefits are self-explanatory, while the third benefit is exemplified by a comparison between models trained on original-sized and cropped videos:

![](https://assets.offshoreview.xyz/zfile/new-docu/3efe5a38dc58258105a9a7c2edd85952.gif)

> - The left side shows videos generated by a model trained on cropped videos.
> - The right side shows videos generated by a model trained on original-sized videos.

Furthermore, to enhance Sora's understanding of user intent and improve video generation quality, OpenAI incorporated several ingenious strategies.

Firstly, training Sora requires a large dataset of videos with accompanying text descriptions. OpenAI utilized the re-captioning feature from their DALL·E 3 model to **add high-quality textual descriptions to the training videos**. They believe this enhances the overall quality of the generated videos.

Secondly, on the input side, instead of directly providing text prompts to Sora, OpenAI utilized the capabilities of GPT. When users input text prompts for Sora, GPT first expands these prompts accurately and comprehensively. The expanded prompts are then fed to Sora, ensuring more precise video generation.

## In Conclusion

Sora's outstanding performance is not coincidental but a result of OpenAI's past work, including GPT, DALL·E, and others, either directly integrated or serving as inspiration.

Perhaps we can say that **OpenAI has become a giant in its own right**, standing on the shoulders of its previous success to achieve new heights. 

In contrast, other competitors, both domestic and international, may lag further behind due to technical disparities in text-to-video and image-to-video technologies.

**Terms like "taking a shortcut" or "closing the gap in X months" may just be self-consolations rather than realistic prospects.**
