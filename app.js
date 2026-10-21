(function () {
    "use strict";
    // بررسی وضعیت ورود کاربر
    const isLoggedIn =
    localStorage.getItem("loggedIn") === "true";

if (!isLoggedIn) {
    window.location.replace("./login.html");
    return;
}

    // اگر وارد نشده، انتقال به صفحه ورود
    if (!isLoggedIn) {
        window.location.replace("login.html");
        return;
    }

    // انتخاب تب‌ها
    const tabs = document.querySelectorAll(".messenger-tab");

    const panels = {
        groups: document.getElementById("groups-panel"),
        channels: document.getElementById("channels-panel")
    };

    // اگر تب‌ها در صفحه وجود نداشتند، ادامه نده
    if (!tabs.length || !panels.groups || !panels.channels) {
        return;
    }

    // تغییر بین گروه‌ها و کانال‌ها
    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            const selectedTab = tab.dataset.tab;

            if (!panels[selectedTab]) {
                return;
            }

            tabs.forEach(function (item) {
                const active = item === tab;

                item.classList.toggle("active", active);
                item.setAttribute(
                    "aria-selected",
                    String(active)
                );
            });

            Object.keys(panels).forEach(function (key) {
                panels[key].hidden = key !== selectedTab;
            });
        });
    });

})();