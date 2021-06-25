import { KeyboardLayout } from '@keywrite/core';
type LayoutMeta = { name: string; regions: string[] };
type LayoutSpec = { meta: LayoutMeta; layout: KeyboardLayout };
const layout: LayoutSpec = {
    meta: { name: "Dizi, Me'en, Mursi, Suri", regions: ['mym-ET', 'muz-ET', 'suq-ET', 'mdx-ET'] },
    layout: {
        h: {
            value: 'ህ',
            next: {
                e: { value: 'ሀ', next: null },
                E: { value: 'ሀ', next: null },
                u: { value: 'ሁ', next: null },
                U: { value: 'ሁ', next: null },
                i: { value: 'ሂ', next: { e: { value: 'ሄ', next: null }, E: { value: 'ሄ', next: null } } },
                I: { value: 'ሂ', next: { e: { value: 'ሄ', next: null }, E: { value: 'ሄ', next: null } } },
                a: { value: 'ሃ', next: null },
                A: { value: 'ሃ', next: null },
                o: { value: 'ሆ', next: { a: { value: 'ሇ', next: null }, A: { value: 'ሇ', next: null } } },
                O: { value: 'ሆ', next: { a: { value: 'ሇ', next: null }, A: { value: 'ሇ', next: null } } },
                h: {
                    value: 'ኅ',
                    next: {
                        e: { value: 'ኀ', next: null },
                        E: { value: 'ኀ', next: null },
                        u: { value: 'ኁ', next: null },
                        U: { value: 'ኁ', next: null },
                        i: { value: 'ኂ', next: { e: { value: 'ኄ', next: null }, E: { value: 'ኄ', next: null } } },
                        I: { value: 'ኂ', next: { e: { value: 'ኄ', next: null }, E: { value: 'ኄ', next: null } } },
                        a: { value: 'ኃ', next: null },
                        A: { value: 'ኃ', next: null },
                        o: { value: 'ኆ', next: { a: { value: 'ኇ', next: null }, A: { value: 'ኇ', next: null } } },
                        O: { value: 'ኆ', next: { a: { value: 'ኇ', next: null }, A: { value: 'ኇ', next: null } } },
                    },
                },
            },
        },
        H: {
            value: 'ህ',
            next: {
                e: { value: 'ሀ', next: null },
                E: { value: 'ሀ', next: null },
                u: { value: 'ሁ', next: null },
                U: { value: 'ሁ', next: null },
                i: { value: 'ሂ', next: { e: { value: 'ሄ', next: null }, E: { value: 'ሄ', next: null } } },
                I: { value: 'ሂ', next: { e: { value: 'ሄ', next: null }, E: { value: 'ሄ', next: null } } },
                a: { value: 'ሃ', next: null },
                A: { value: 'ሃ', next: null },
                o: { value: 'ሆ', next: { a: { value: 'ሇ', next: null }, A: { value: 'ሇ', next: null } } },
                O: { value: 'ሆ', next: { a: { value: 'ሇ', next: null }, A: { value: 'ሇ', next: null } } },
            },
        },
        l: {
            value: 'ል',
            next: {
                e: { value: 'ለ', next: null },
                E: { value: 'ለ', next: null },
                u: { value: 'ሉ', next: null },
                U: { value: 'ሉ', next: null },
                i: { value: 'ሊ', next: { e: { value: 'ሌ', next: null }, E: { value: 'ሌ', next: null } } },
                I: { value: 'ሊ', next: { e: { value: 'ሌ', next: null }, E: { value: 'ሌ', next: null } } },
                a: { value: 'ላ', next: null },
                A: { value: 'ላ', next: null },
                o: { value: 'ሎ', next: { a: { value: 'ⶀ', next: null }, A: { value: 'ⶀ', next: null } } },
                O: { value: 'ሎ', next: { a: { value: 'ⶀ', next: null }, A: { value: 'ⶀ', next: null } } },
            },
        },
        L: {
            value: 'ል',
            next: {
                e: { value: 'ለ', next: null },
                E: { value: 'ለ', next: null },
                u: { value: 'ሉ', next: null },
                U: { value: 'ሉ', next: null },
                i: { value: 'ሊ', next: { e: { value: 'ሌ', next: null }, E: { value: 'ሌ', next: null } } },
                I: { value: 'ሊ', next: { e: { value: 'ሌ', next: null }, E: { value: 'ሌ', next: null } } },
                a: { value: 'ላ', next: null },
                A: { value: 'ላ', next: null },
                o: { value: 'ሎ', next: { a: { value: 'ⶀ', next: null }, A: { value: 'ⶀ', next: null } } },
                O: { value: 'ሎ', next: { a: { value: 'ⶀ', next: null }, A: { value: 'ⶀ', next: null } } },
            },
        },
        m: {
            value: 'ም',
            next: {
                e: { value: 'መ', next: null },
                E: { value: 'መ', next: null },
                u: { value: 'ሙ', next: null },
                U: { value: 'ሙ', next: null },
                i: { value: 'ሚ', next: { e: { value: 'ሜ', next: null }, E: { value: 'ሜ', next: null } } },
                I: { value: 'ሚ', next: { e: { value: 'ሜ', next: null }, E: { value: 'ሜ', next: null } } },
                a: { value: 'ማ', next: null },
                A: { value: 'ማ', next: null },
                o: { value: 'ሞ', next: { a: { value: 'ⶁ', next: null }, A: { value: 'ⶁ', next: null } } },
                O: { value: 'ሞ', next: { a: { value: 'ⶁ', next: null }, A: { value: 'ⶁ', next: null } } },
            },
        },
        M: {
            value: 'ም',
            next: {
                e: { value: 'መ', next: null },
                E: { value: 'መ', next: null },
                u: { value: 'ሙ', next: null },
                U: { value: 'ሙ', next: null },
                i: { value: 'ሚ', next: { e: { value: 'ሜ', next: null }, E: { value: 'ሜ', next: null } } },
                I: { value: 'ሚ', next: { e: { value: 'ሜ', next: null }, E: { value: 'ሜ', next: null } } },
                a: { value: 'ማ', next: null },
                A: { value: 'ማ', next: null },
                o: { value: 'ሞ', next: { a: { value: 'ⶁ', next: null }, A: { value: 'ⶁ', next: null } } },
                O: { value: 'ሞ', next: { a: { value: 'ⶁ', next: null }, A: { value: 'ⶁ', next: null } } },
            },
        },
        r: {
            value: 'ር',
            next: {
                e: { value: 'ረ', next: null },
                E: { value: 'ረ', next: null },
                u: { value: 'ሩ', next: null },
                U: { value: 'ሩ', next: null },
                i: { value: 'ሪ', next: { e: { value: 'ሬ', next: null }, E: { value: 'ሬ', next: null } } },
                I: { value: 'ሪ', next: { e: { value: 'ሬ', next: null }, E: { value: 'ሬ', next: null } } },
                a: { value: 'ራ', next: null },
                A: { value: 'ራ', next: null },
                o: { value: 'ሮ', next: { a: { value: 'ⶂ', next: null }, A: { value: 'ⶂ', next: null } } },
                O: { value: 'ሮ', next: { a: { value: 'ⶂ', next: null }, A: { value: 'ⶂ', next: null } } },
            },
        },
        R: {
            value: 'ር',
            next: {
                e: { value: 'ረ', next: null },
                E: { value: 'ረ', next: null },
                u: { value: 'ሩ', next: null },
                U: { value: 'ሩ', next: null },
                i: { value: 'ሪ', next: { e: { value: 'ሬ', next: null }, E: { value: 'ሬ', next: null } } },
                I: { value: 'ሪ', next: { e: { value: 'ሬ', next: null }, E: { value: 'ሬ', next: null } } },
                a: { value: 'ራ', next: null },
                A: { value: 'ራ', next: null },
                o: { value: 'ሮ', next: { a: { value: 'ⶂ', next: null }, A: { value: 'ⶂ', next: null } } },
                O: { value: 'ሮ', next: { a: { value: 'ⶂ', next: null }, A: { value: 'ⶂ', next: null } } },
            },
        },
        s: {
            value: 'ስ',
            next: {
                e: { value: 'ሰ', next: null },
                E: { value: 'ሰ', next: null },
                u: { value: 'ሱ', next: null },
                U: { value: 'ሱ', next: null },
                i: { value: 'ሲ', next: { e: { value: 'ሴ', next: null }, E: { value: 'ሴ', next: null } } },
                I: { value: 'ሲ', next: { e: { value: 'ሴ', next: null }, E: { value: 'ሴ', next: null } } },
                a: { value: 'ሳ', next: null },
                A: { value: 'ሳ', next: null },
                o: { value: 'ሶ', next: { a: { value: 'ⶃ', next: null }, A: { value: 'ⶃ', next: null } } },
                O: { value: 'ሶ', next: { a: { value: 'ⶃ', next: null }, A: { value: 'ⶃ', next: null } } },
            },
        },
        x: {
            value: 'ሽ',
            next: {
                e: { value: 'ሸ', next: null },
                E: { value: 'ሸ', next: null },
                u: { value: 'ሹ', next: null },
                U: { value: 'ሹ', next: null },
                i: { value: 'ሺ', next: { e: { value: 'ሼ', next: null }, E: { value: 'ሼ', next: null } } },
                I: { value: 'ሺ', next: { e: { value: 'ሼ', next: null }, E: { value: 'ሼ', next: null } } },
                a: { value: 'ሻ', next: null },
                A: { value: 'ሻ', next: null },
                o: { value: 'ሾ', next: { a: { value: 'ⶄ', next: null }, A: { value: 'ⶄ', next: null } } },
                O: { value: 'ሾ', next: { a: { value: 'ⶄ', next: null }, A: { value: 'ⶄ', next: null } } },
            },
        },
        X: {
            value: 'ሽ',
            next: {
                e: { value: 'ሸ', next: null },
                E: { value: 'ሸ', next: null },
                u: { value: 'ሹ', next: null },
                U: { value: 'ሹ', next: null },
                i: { value: 'ሺ', next: { e: { value: 'ሼ', next: null }, E: { value: 'ሼ', next: null } } },
                I: { value: 'ሺ', next: { e: { value: 'ሼ', next: null }, E: { value: 'ሼ', next: null } } },
                a: { value: 'ሻ', next: null },
                A: { value: 'ሻ', next: null },
                o: { value: 'ሾ', next: { a: { value: 'ⶄ', next: null }, A: { value: 'ⶄ', next: null } } },
                O: { value: 'ሾ', next: { a: { value: 'ⶄ', next: null }, A: { value: 'ⶄ', next: null } } },
            },
        },
        q: {
            value: 'ቅ',
            next: {
                e: { value: 'ቀ', next: null },
                E: { value: 'ቀ', next: null },
                u: { value: 'ቁ', next: null },
                U: { value: 'ቁ', next: null },
                i: { value: 'ቂ', next: { e: { value: 'ቄ', next: null }, E: { value: 'ቄ', next: null } } },
                I: { value: 'ቂ', next: { e: { value: 'ቄ', next: null }, E: { value: 'ቄ', next: null } } },
                a: { value: 'ቃ', next: null },
                A: { value: 'ቃ', next: null },
                o: { value: 'ቆ', next: { a: { value: 'ቇ', next: null }, A: { value: 'ቇ', next: null } } },
                O: { value: 'ቆ', next: { a: { value: 'ቇ', next: null }, A: { value: 'ቇ', next: null } } },
            },
        },
        Q: {
            value: 'ቅ',
            next: {
                e: { value: 'ቀ', next: null },
                E: { value: 'ቀ', next: null },
                u: { value: 'ቁ', next: null },
                U: { value: 'ቁ', next: null },
                i: { value: 'ቂ', next: { e: { value: 'ቄ', next: null }, E: { value: 'ቄ', next: null } } },
                I: { value: 'ቂ', next: { e: { value: 'ቄ', next: null }, E: { value: 'ቄ', next: null } } },
                a: { value: 'ቃ', next: null },
                A: { value: 'ቃ', next: null },
                o: { value: 'ቆ', next: { a: { value: 'ቇ', next: null }, A: { value: 'ቇ', next: null } } },
                O: { value: 'ቆ', next: { a: { value: 'ቇ', next: null }, A: { value: 'ቇ', next: null } } },
            },
        },
        b: {
            value: 'ብ',
            next: {
                e: { value: 'በ', next: null },
                E: { value: 'በ', next: null },
                u: { value: 'ቡ', next: null },
                U: { value: 'ቡ', next: null },
                i: { value: 'ቢ', next: { e: { value: 'ቤ', next: null }, E: { value: 'ቤ', next: null } } },
                I: { value: 'ቢ', next: { e: { value: 'ቤ', next: null }, E: { value: 'ቤ', next: null } } },
                a: { value: 'ባ', next: null },
                A: { value: 'ባ', next: null },
                o: { value: 'ቦ', next: { a: { value: 'ⶅ', next: null }, A: { value: 'ⶅ', next: null } } },
                O: { value: 'ቦ', next: { a: { value: 'ⶅ', next: null }, A: { value: 'ⶅ', next: null } } },
            },
        },
        B: {
            value: 'ብ',
            next: {
                e: { value: 'በ', next: null },
                E: { value: 'በ', next: null },
                u: { value: 'ቡ', next: null },
                U: { value: 'ቡ', next: null },
                i: { value: 'ቢ', next: { e: { value: 'ቤ', next: null }, E: { value: 'ቤ', next: null } } },
                I: { value: 'ቢ', next: { e: { value: 'ቤ', next: null }, E: { value: 'ቤ', next: null } } },
                a: { value: 'ባ', next: null },
                A: { value: 'ባ', next: null },
                o: { value: 'ቦ', next: { a: { value: 'ⶅ', next: null }, A: { value: 'ⶅ', next: null } } },
                O: { value: 'ቦ', next: { a: { value: 'ⶅ', next: null }, A: { value: 'ⶅ', next: null } } },
            },
        },
        t: {
            value: 'ት',
            next: {
                e: { value: 'ተ', next: null },
                E: { value: 'ተ', next: null },
                u: { value: 'ቱ', next: null },
                U: { value: 'ቱ', next: null },
                i: { value: 'ቲ', next: { e: { value: 'ቴ', next: null }, E: { value: 'ቴ', next: null } } },
                I: { value: 'ቲ', next: { e: { value: 'ቴ', next: null }, E: { value: 'ቴ', next: null } } },
                a: { value: 'ታ', next: null },
                A: { value: 'ታ', next: null },
                o: { value: 'ቶ', next: { a: { value: 'ⶆ', next: null }, A: { value: 'ⶆ', next: null } } },
                O: { value: 'ቶ', next: { a: { value: 'ⶆ', next: null }, A: { value: 'ⶆ', next: null } } },
            },
        },
        c: {
            value: 'ች',
            next: {
                e: { value: 'ቸ', next: null },
                E: { value: 'ቸ', next: null },
                u: { value: 'ቹ', next: null },
                U: { value: 'ቹ', next: null },
                i: { value: 'ቺ', next: { e: { value: 'ቼ', next: null }, E: { value: 'ቼ', next: null } } },
                I: { value: 'ቺ', next: { e: { value: 'ቼ', next: null }, E: { value: 'ቼ', next: null } } },
                a: { value: 'ቻ', next: null },
                A: { value: 'ቻ', next: null },
                o: { value: 'ቾ', next: { a: { value: 'ⶇ', next: null }, A: { value: 'ⶇ', next: null } } },
                O: { value: 'ቾ', next: { a: { value: 'ⶇ', next: null }, A: { value: 'ⶇ', next: null } } },
            },
        },
        f: {
            value: 'ኅ',
            next: {
                e: { value: 'ኀ', next: null },
                E: { value: 'ኀ', next: null },
                u: { value: 'ኁ', next: null },
                U: { value: 'ኁ', next: null },
                i: { value: 'ኂ', next: { e: { value: 'ኄ', next: null }, E: { value: 'ኄ', next: null } } },
                I: { value: 'ኂ', next: { e: { value: 'ኄ', next: null }, E: { value: 'ኄ', next: null } } },
                a: { value: 'ኃ', next: null },
                A: { value: 'ኃ', next: null },
                o: { value: 'ኆ', next: { a: { value: 'ኇ', next: null }, A: { value: 'ኇ', next: null } } },
                O: { value: 'ኆ', next: { a: { value: 'ኇ', next: null }, A: { value: 'ኇ', next: null } } },
            },
        },
        F: {
            value: 'ኅ',
            next: {
                e: { value: 'ኀ', next: null },
                E: { value: 'ኀ', next: null },
                u: { value: 'ኁ', next: null },
                U: { value: 'ኁ', next: null },
                i: { value: 'ኂ', next: { e: { value: 'ኄ', next: null }, E: { value: 'ኄ', next: null } } },
                I: { value: 'ኂ', next: { e: { value: 'ኄ', next: null }, E: { value: 'ኄ', next: null } } },
                a: { value: 'ኃ', next: null },
                A: { value: 'ኃ', next: null },
                o: { value: 'ኆ', next: { a: { value: 'ኇ', next: null }, A: { value: 'ኇ', next: null } } },
                O: { value: 'ኆ', next: { a: { value: 'ኇ', next: null }, A: { value: 'ኇ', next: null } } },
            },
        },
        n: {
            value: 'ን',
            next: {
                e: { value: 'ነ', next: null },
                E: { value: 'ነ', next: null },
                u: { value: 'ኑ', next: null },
                U: { value: 'ኑ', next: null },
                i: { value: 'ኒ', next: { e: { value: 'ኔ', next: null }, E: { value: 'ኔ', next: null } } },
                I: { value: 'ኒ', next: { e: { value: 'ኔ', next: null }, E: { value: 'ኔ', next: null } } },
                a: { value: 'ና', next: null },
                A: { value: 'ና', next: null },
                o: { value: 'ኖ', next: { a: { value: 'ⶈ', next: null }, A: { value: 'ⶈ', next: null } } },
                O: { value: 'ኖ', next: { a: { value: 'ⶈ', next: null }, A: { value: 'ⶈ', next: null } } },
            },
        },
        N: {
            value: 'ኝ',
            next: {
                e: { value: 'ኘ', next: null },
                E: { value: 'ኘ', next: null },
                u: { value: 'ኙ', next: null },
                U: { value: 'ኙ', next: null },
                i: { value: 'ኚ', next: { e: { value: 'ኜ', next: null }, E: { value: 'ኜ', next: null } } },
                I: { value: 'ኚ', next: { e: { value: 'ኜ', next: null }, E: { value: 'ኜ', next: null } } },
                a: { value: 'ኛ', next: null },
                A: { value: 'ኛ', next: null },
                o: { value: 'ኞ', next: { a: { value: 'ⶉ', next: null }, A: { value: 'ⶉ', next: null } } },
                O: { value: 'ኞ', next: { a: { value: 'ⶉ', next: null }, A: { value: 'ⶉ', next: null } } },
            },
        },
        a: {
            value: 'እ',
            next: {
                e: { value: 'አ', next: null },
                E: { value: 'አ', next: null },
                u: { value: 'ኡ', next: null },
                U: { value: 'ኡ', next: null },
                i: { value: 'ኢ', next: { e: { value: 'ኤ', next: null }, E: { value: 'ኤ', next: null } } },
                I: { value: 'ኢ', next: { e: { value: 'ኤ', next: null }, E: { value: 'ኤ', next: null } } },
                a: { value: 'ኣ', next: null },
                A: { value: 'ኣ', next: null },
                o: { value: 'ኦ', next: { a: { value: 'ⶊ', next: null }, A: { value: 'ⶊ', next: null } } },
                O: { value: 'ኦ', next: { a: { value: 'ⶊ', next: null }, A: { value: 'ⶊ', next: null } } },
            },
        },
        k: {
            value: 'ክ',
            next: {
                e: { value: 'ከ', next: null },
                E: { value: 'ከ', next: null },
                u: { value: 'ኩ', next: null },
                U: { value: 'ኩ', next: null },
                i: { value: 'ኪ', next: { e: { value: 'ኬ', next: null }, E: { value: 'ኬ', next: null } } },
                I: { value: 'ኪ', next: { e: { value: 'ኬ', next: null }, E: { value: 'ኬ', next: null } } },
                a: { value: 'ካ', next: null },
                A: { value: 'ካ', next: null },
                o: { value: 'ኮ', next: { a: { value: 'ኯ', next: null }, A: { value: 'ኯ', next: null } } },
                O: { value: 'ኮ', next: { a: { value: 'ኯ', next: null }, A: { value: 'ኯ', next: null } } },
            },
        },
        K: {
            value: 'ክ',
            next: {
                e: { value: 'ከ', next: null },
                E: { value: 'ከ', next: null },
                u: { value: 'ኩ', next: null },
                U: { value: 'ኩ', next: null },
                i: { value: 'ኪ', next: { e: { value: 'ኬ', next: null }, E: { value: 'ኬ', next: null } } },
                I: { value: 'ኪ', next: { e: { value: 'ኬ', next: null }, E: { value: 'ኬ', next: null } } },
                a: { value: 'ካ', next: null },
                A: { value: 'ካ', next: null },
                o: { value: 'ኮ', next: { a: { value: 'ኯ', next: null }, A: { value: 'ኯ', next: null } } },
                O: { value: 'ኮ', next: { a: { value: 'ኯ', next: null }, A: { value: 'ኯ', next: null } } },
            },
        },
        w: {
            value: 'ው',
            next: {
                e: { value: 'ወ', next: null },
                E: { value: 'ወ', next: null },
                u: { value: 'ዉ', next: null },
                U: { value: 'ዉ', next: null },
                i: { value: 'ዊ', next: { e: { value: 'ዌ', next: null }, E: { value: 'ዌ', next: null } } },
                I: { value: 'ዊ', next: { e: { value: 'ዌ', next: null }, E: { value: 'ዌ', next: null } } },
                a: { value: 'ዋ', next: null },
                A: { value: 'ዋ', next: null },
                o: { value: 'ዎ', next: { a: { value: 'ዏ', next: null }, A: { value: 'ዏ', next: null } } },
                O: { value: 'ዎ', next: { a: { value: 'ዏ', next: null }, A: { value: 'ዏ', next: null } } },
            },
        },
        W: {
            value: 'ው',
            next: {
                e: { value: 'ወ', next: null },
                E: { value: 'ወ', next: null },
                u: { value: 'ዉ', next: null },
                U: { value: 'ዉ', next: null },
                i: { value: 'ዊ', next: { e: { value: 'ዌ', next: null }, E: { value: 'ዌ', next: null } } },
                I: { value: 'ዊ', next: { e: { value: 'ዌ', next: null }, E: { value: 'ዌ', next: null } } },
                a: { value: 'ዋ', next: null },
                A: { value: 'ዋ', next: null },
                o: { value: 'ዎ', next: { a: { value: 'ዏ', next: null }, A: { value: 'ዏ', next: null } } },
                O: { value: 'ዎ', next: { a: { value: 'ዏ', next: null }, A: { value: 'ዏ', next: null } } },
            },
        },
        z: {
            value: 'ዝ',
            next: {
                e: { value: 'ዘ', next: null },
                E: { value: 'ዘ', next: null },
                u: { value: 'ዙ', next: null },
                U: { value: 'ዙ', next: null },
                i: { value: 'ዚ', next: { e: { value: 'ዜ', next: null }, E: { value: 'ዜ', next: null } } },
                I: { value: 'ዚ', next: { e: { value: 'ዜ', next: null }, E: { value: 'ዜ', next: null } } },
                a: { value: 'ዛ', next: null },
                A: { value: 'ዛ', next: null },
                o: { value: 'ዞ', next: { a: { value: 'ⶋ', next: null }, A: { value: 'ⶋ', next: null } } },
                O: { value: 'ዞ', next: { a: { value: 'ⶋ', next: null }, A: { value: 'ⶋ', next: null } } },
            },
        },
        Z: {
            value: 'ዝ',
            next: {
                e: { value: 'ዘ', next: null },
                E: { value: 'ዘ', next: null },
                u: { value: 'ዙ', next: null },
                U: { value: 'ዙ', next: null },
                i: { value: 'ዚ', next: { e: { value: 'ዜ', next: null }, E: { value: 'ዜ', next: null } } },
                I: { value: 'ዚ', next: { e: { value: 'ዜ', next: null }, E: { value: 'ዜ', next: null } } },
                a: { value: 'ዛ', next: null },
                A: { value: 'ዛ', next: null },
                o: { value: 'ዞ', next: { a: { value: 'ⶋ', next: null }, A: { value: 'ⶋ', next: null } } },
                O: { value: 'ዞ', next: { a: { value: 'ⶋ', next: null }, A: { value: 'ⶋ', next: null } } },
            },
        },
        y: {
            value: 'ይ',
            next: {
                e: { value: 'የ', next: null },
                E: { value: 'የ', next: null },
                u: { value: 'ዩ', next: null },
                U: { value: 'ዩ', next: null },
                i: { value: 'ዪ', next: { e: { value: 'ዬ', next: null }, E: { value: 'ዬ', next: null } } },
                I: { value: 'ዪ', next: { e: { value: 'ዬ', next: null }, E: { value: 'ዬ', next: null } } },
                a: { value: 'ያ', next: null },
                A: { value: 'ያ', next: null },
                o: { value: 'ዮ', next: { a: { value: 'ዯ', next: null }, A: { value: 'ዯ', next: null } } },
                O: { value: 'ዮ', next: { a: { value: 'ዯ', next: null }, A: { value: 'ዯ', next: null } } },
            },
        },
        Y: {
            value: 'ይ',
            next: {
                e: { value: 'የ', next: null },
                E: { value: 'የ', next: null },
                u: { value: 'ዩ', next: null },
                U: { value: 'ዩ', next: null },
                i: { value: 'ዪ', next: { e: { value: 'ዬ', next: null }, E: { value: 'ዬ', next: null } } },
                I: { value: 'ዪ', next: { e: { value: 'ዬ', next: null }, E: { value: 'ዬ', next: null } } },
                a: { value: 'ያ', next: null },
                A: { value: 'ያ', next: null },
                o: { value: 'ዮ', next: { a: { value: 'ዯ', next: null }, A: { value: 'ዯ', next: null } } },
                O: { value: 'ዮ', next: { a: { value: 'ዯ', next: null }, A: { value: 'ዯ', next: null } } },
            },
        },
        d: {
            value: 'ድ',
            next: {
                e: { value: 'ደ', next: null },
                E: { value: 'ደ', next: null },
                u: { value: 'ዱ', next: null },
                U: { value: 'ዱ', next: null },
                i: { value: 'ዲ', next: { e: { value: 'ዴ', next: null }, E: { value: 'ዴ', next: null } } },
                I: { value: 'ዲ', next: { e: { value: 'ዴ', next: null }, E: { value: 'ዴ', next: null } } },
                a: { value: 'ዳ', next: null },
                A: { value: 'ዳ', next: null },
                o: { value: 'ዶ', next: { a: { value: 'ⶌ', next: null }, A: { value: 'ⶌ', next: null } } },
                O: { value: 'ዶ', next: { a: { value: 'ⶌ', next: null }, A: { value: 'ⶌ', next: null } } },
            },
        },
        D: {
            value: 'ዽ',
            next: {
                e: { value: 'ዸ', next: null },
                E: { value: 'ዸ', next: null },
                u: { value: 'ዹ', next: null },
                U: { value: 'ዹ', next: null },
                i: { value: 'ዺ', next: { e: { value: 'ዼ', next: null }, E: { value: 'ዼ', next: null } } },
                I: { value: 'ዺ', next: { e: { value: 'ዼ', next: null }, E: { value: 'ዼ', next: null } } },
                a: { value: 'ዻ', next: null },
                A: { value: 'ዻ', next: null },
                o: { value: 'ዾ', next: { a: { value: 'ⶍ', next: null }, A: { value: 'ⶍ', next: null } } },
                O: { value: 'ዾ', next: { a: { value: 'ⶍ', next: null }, A: { value: 'ⶍ', next: null } } },
            },
        },
        j: {
            value: 'ጅ',
            next: {
                e: { value: 'ጀ', next: null },
                E: { value: 'ጀ', next: null },
                u: { value: 'ጁ', next: null },
                U: { value: 'ጁ', next: null },
                i: { value: 'ጂ', next: { e: { value: 'ጄ', next: null }, E: { value: 'ጄ', next: null } } },
                I: { value: 'ጂ', next: { e: { value: 'ጄ', next: null }, E: { value: 'ጄ', next: null } } },
                a: { value: 'ጃ', next: null },
                A: { value: 'ጃ', next: null },
                o: { value: 'ጆ', next: { a: { value: 'ⶎ', next: null }, A: { value: 'ⶎ', next: null } } },
                O: { value: 'ጆ', next: { a: { value: 'ⶎ', next: null }, A: { value: 'ⶎ', next: null } } },
            },
        },
        J: {
            value: 'ጅ',
            next: {
                e: { value: 'ጀ', next: null },
                E: { value: 'ጀ', next: null },
                u: { value: 'ጁ', next: null },
                U: { value: 'ጁ', next: null },
                i: { value: 'ጂ', next: { e: { value: 'ጄ', next: null }, E: { value: 'ጄ', next: null } } },
                I: { value: 'ጂ', next: { e: { value: 'ጄ', next: null }, E: { value: 'ጄ', next: null } } },
                a: { value: 'ጃ', next: null },
                A: { value: 'ጃ', next: null },
                o: { value: 'ጆ', next: { a: { value: 'ⶎ', next: null }, A: { value: 'ⶎ', next: null } } },
                O: { value: 'ጆ', next: { a: { value: 'ⶎ', next: null }, A: { value: 'ⶎ', next: null } } },
            },
        },
        g: {
            value: 'ግ',
            next: {
                e: { value: 'ገ', next: null },
                E: { value: 'ገ', next: null },
                u: { value: 'ጉ', next: null },
                U: { value: 'ጉ', next: null },
                i: { value: 'ጊ', next: { e: { value: 'ጌ', next: null }, E: { value: 'ጌ', next: null } } },
                I: { value: 'ጊ', next: { e: { value: 'ጌ', next: null }, E: { value: 'ጌ', next: null } } },
                a: { value: 'ጋ', next: null },
                A: { value: 'ጋ', next: null },
                o: { value: 'ጎ', next: { a: { value: 'ጏ', next: null }, A: { value: 'ጏ', next: null } } },
                O: { value: 'ጎ', next: { a: { value: 'ጏ', next: null }, A: { value: 'ጏ', next: null } } },
            },
        },
        G: {
            value: 'ግ',
            next: {
                e: { value: 'ገ', next: null },
                E: { value: 'ገ', next: null },
                u: { value: 'ጉ', next: null },
                U: { value: 'ጉ', next: null },
                i: { value: 'ጊ', next: { e: { value: 'ጌ', next: null }, E: { value: 'ጌ', next: null } } },
                I: { value: 'ጊ', next: { e: { value: 'ጌ', next: null }, E: { value: 'ጌ', next: null } } },
                a: { value: 'ጋ', next: null },
                A: { value: 'ጋ', next: null },
                o: { value: 'ጎ', next: { a: { value: 'ጏ', next: null }, A: { value: 'ጏ', next: null } } },
                O: { value: 'ጎ', next: { a: { value: 'ጏ', next: null }, A: { value: 'ጏ', next: null } } },
            },
        },
        T: {
            value: 'ጥ',
            next: {
                e: { value: 'ጠ', next: null },
                E: { value: 'ጠ', next: null },
                u: { value: 'ጡ', next: null },
                U: { value: 'ጡ', next: null },
                i: { value: 'ጢ', next: { e: { value: 'ጤ', next: null }, E: { value: 'ጤ', next: null } } },
                I: { value: 'ጢ', next: { e: { value: 'ጤ', next: null }, E: { value: 'ጤ', next: null } } },
                a: { value: 'ጣ', next: null },
                A: { value: 'ጣ', next: null },
                o: { value: 'ጦ', next: { a: { value: 'ⶏ', next: null }, A: { value: 'ⶏ', next: null } } },
                O: { value: 'ጦ', next: { a: { value: 'ⶏ', next: null }, A: { value: 'ⶏ', next: null } } },
            },
        },
        C: {
            value: 'ጭ',
            next: {
                e: { value: 'ጨ', next: null },
                E: { value: 'ጨ', next: null },
                u: { value: 'ጩ', next: null },
                U: { value: 'ጩ', next: null },
                i: { value: 'ጪ', next: { e: { value: 'ጬ', next: null }, E: { value: 'ጬ', next: null } } },
                I: { value: 'ጪ', next: { e: { value: 'ጬ', next: null }, E: { value: 'ጬ', next: null } } },
                a: { value: 'ጫ', next: null },
                A: { value: 'ጫ', next: null },
                o: { value: 'ጮ', next: { a: { value: 'ⶐ', next: null }, A: { value: 'ⶐ', next: null } } },
                O: { value: 'ጮ', next: { a: { value: 'ⶐ', next: null }, A: { value: 'ⶐ', next: null } } },
            },
        },
        P: {
            value: 'ጵ',
            next: {
                e: { value: 'ጰ', next: null },
                E: { value: 'ጰ', next: null },
                u: { value: 'ጱ', next: null },
                U: { value: 'ጱ', next: null },
                i: { value: 'ጲ', next: { e: { value: 'ጴ', next: null }, E: { value: 'ጴ', next: null } } },
                I: { value: 'ጲ', next: { e: { value: 'ጴ', next: null }, E: { value: 'ጴ', next: null } } },
                a: { value: 'ጳ', next: null },
                A: { value: 'ጳ', next: null },
                o: { value: 'ጶ', next: { a: { value: 'ⶑ', next: null }, A: { value: 'ⶑ', next: null } } },
                O: { value: 'ጶ', next: { a: { value: 'ⶑ', next: null }, A: { value: 'ⶑ', next: null } } },
            },
        },
        p: {
            value: 'ፕ',
            next: {
                e: { value: 'ፐ', next: null },
                E: { value: 'ፐ', next: null },
                u: { value: 'ፑ', next: null },
                U: { value: 'ፑ', next: null },
                i: { value: 'ፒ', next: { e: { value: 'ፔ', next: null }, E: { value: 'ፔ', next: null } } },
                I: { value: 'ፒ', next: { e: { value: 'ፔ', next: null }, E: { value: 'ፔ', next: null } } },
                a: { value: 'ፓ', next: null },
                A: { value: 'ፓ', next: null },
                o: { value: 'ፖ', next: { a: { value: 'ⶒ', next: null }, A: { value: 'ⶒ', next: null } } },
                O: { value: 'ፖ', next: { a: { value: 'ⶒ', next: null }, A: { value: 'ⶒ', next: null } } },
            },
        },
        S: {
            value: 'ፅ',
            next: {
                e: { value: 'ፀ', next: null },
                E: { value: 'ፀ', next: null },
                u: { value: 'ፁ', next: null },
                U: { value: 'ፁ', next: null },
                i: { value: 'ፂ', next: { e: { value: 'ፄ', next: null }, E: { value: 'ፄ', next: null } } },
                I: { value: 'ፂ', next: { e: { value: 'ፄ', next: null }, E: { value: 'ፄ', next: null } } },
                a: { value: 'ፃ', next: null },
                A: { value: 'ፃ', next: null },
                o: { value: 'ፆ', next: { a: { value: 'ፇ', next: null }, A: { value: 'ፇ', next: null } } },
                O: { value: 'ፆ', next: { a: { value: 'ፇ', next: null }, A: { value: 'ፇ', next: null } } },
            },
        },
        e: { value: 'እ', next: null },
        i: { value: 'ኢ', next: { e: { value: 'ኤ', next: null }, E: { value: 'ኤ', next: null } } },
        o: { value: 'ኦ', next: null },
        u: { value: 'ኡ', next: null },
        ':': {
            value: '፡',
            next: { ':': { value: '።', next: { ':': { value: ':', next: null } } }, ',': { value: '፥', next: null } },
        },
        ',': { value: '፣', next: { ',': { value: '፥', next: { ',': { value: ',', next: null } } } } },
        ';': { value: '፤', next: { ';': { value: ';', next: null } } },
        '<': { value: '‹', next: { '<': { value: '«', next: { '<': { value: '<', next: null } } } } },
        '>': { value: '›', next: { '>': { value: '»', next: { '>': { value: '>', next: null } } } } },
    },
};
export default layout;