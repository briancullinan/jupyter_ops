var visitMyProfile = () => {
        .getUrl().then(url => url.indexOf('/in/') == -1
            name: '//*[contains(@class, "pv-top-card-section__name")]//text()',
            title: '//*[contains(@class, "pv-top-card-section__headline")]//text()',
            url: '//*[contains(@class, "ci-vanity-url")]//*[contains(@class, "pv-contact-info__contact-item")]//text()',
            phone: '//*[contains(@class, "ci-phone")]//*[contains(@class, "pv-contact-info__contact-item")]//text()',
            email: '//*[contains(@class, "ci-email")]//*[contains(@class, "pv-contact-info__contact-item")]//text()'
        }))