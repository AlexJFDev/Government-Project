<template>
    <div>
        <PageCard>
            <template v-slot:title>The Present Impact of AI</template>
            <template v-slot:main>
                <v-divider :thickness="28.08" class="border-opacity-0"></v-divider>
                <p>AI seems set to have a big impact on the future and on every aspect of life and it already has had a significant impact.</p>
                <h3>New Tools</h3>
                <p>Powerful new tools have been enabled by AI. Standing alone, a generative AI like ChatGPT is already very powerful and they can be enhance further when other systems are built on top of them. For example, the in-development plugins for ChatGPT promise to make it capable of handling even more tasks than it already could <InTextCitation source="https://openai.com/blog/chatgpt-plugins" number="11"/>. Other tools, like google search, have been AI powered for years and make use of non-generative systems.<InTextCitation source="https://www.cnet.com/tech/computing/google-reveals-its-ai-powered-search-engine-to-answer-your-questions/" number="12"/></p>
                <h3>In the Government</h3>
                <p>AI has also seen some use by the government. Many government agencies are being to use AI systems to become more efficient, cut budgets, and increase productivity. For example, the FBI is creating a bot that will automate payroll<InTextCitation source="https://fedscoop.com/fbi-finance-team-to-roll-out-first-software-bot/" number="13"/> and the state department is automating the processing of its financial statements.<InTextCitation source="https://fedscoop.com/kelly-fletcher-rpa/" number="14"/> Even the IRS, which is known for its slow adoption of new technology, is using AI to get better at collecting taxes.<InTextCitation source="https://www.ibm.com/blog/irs-ai-automation/" number="15"/> Each of these use cases demonstrate how AI is applicable to the government and just how wide reaching its impact is.</p>
            </template>
        </PageCard>
    </div>
</template>
<script>
    import InTextCitation from '@/components/InTextCitation.vue';
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'ThePresentImpactOfAI',
        components: {
            PageCard,
            InTextCitation
        }
    }
</script>