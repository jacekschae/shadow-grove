(ns dummy.components
  (:require
    [shadow.grove :as sg :refer (<< defc css)]
    [shadow.grove.ui.badge :as badge]
    [shadow.grove.ui.separator :as separator]
    [shadow.grove.ui.button :as button]
    [shadow.grove.ui.card :as card]
    [shadow.grove.ui.toggle :as toggle]
    [shadow.grove.ui.switch :as switch]
    [shadow.grove.ui.tabs :as tabs]
    [shadow.grove.ui.dialog :as dialog]))

;; -- Section header helper --

(def $section
  (css {:margin-bottom "48px"}))

(def $section-title
  (css {:font-size "20px"
        :font-weight "600"
        :margin-bottom "16px"
        :color "hsl(var(--ui-foreground))"}))

(def $row
  (css :flex :items-center
    {:gap "8px"
     :flex-wrap "wrap"
     :margin-bottom "12px"}))

(def $label
  (css {:font-size "14px"
        :font-weight "500"
        :color "hsl(var(--ui-muted-foreground))"
        :min-width "80px"}))

;; -- Badge Demo --

(defn demo-badges []
  (<< [:div {:class $section}
       [:h2 {:class $section-title} "Badge"]
       [:div {:class $row}
        (badge/badge {:variant :default} "Default")
        (badge/badge {:variant :secondary} "Secondary")
        (badge/badge {:variant :destructive} "Destructive")
        (badge/badge {:variant :outline} "Outline")]]))

;; -- Separator Demo --

(defn demo-separators []
  (<< [:div {:class $section}
       [:h2 {:class $section-title} "Separator"]
       [:div
        [:p (css {:margin-bottom "8px"}) "Content above"]
        (separator/separator {})
        [:p (css {:margin-top "8px"}) "Content below"]]
       [:div (css :flex :items-center {:height "24px" :gap "16px" :margin-top "16px"})
        [:span "Left"]
        (separator/separator {:orientation :vertical})
        [:span "Middle"]
        (separator/separator {:orientation :vertical})
        [:span "Right"]]]))

;; -- Button Demo --

(defn demo-buttons []
  (<< [:div {:class $section}
       [:h2 {:class $section-title} "Button"]
       [:div {:class $row}
        [:span {:class $label} "Variants:"]
        (button/button {:variant :default} "Default")
        (button/button {:variant :secondary} "Secondary")
        (button/button {:variant :destructive} "Destructive")
        (button/button {:variant :outline} "Outline")
        (button/button {:variant :ghost} "Ghost")
        (button/button {:variant :link} "Link")]
       [:div {:class $row}
        [:span {:class $label} "Sizes:"]
        (button/button {:size :sm} "Small")
        (button/button {:size :default} "Default")
        (button/button {:size :lg} "Large")
        (button/button {:size :icon} "\u2606")]
       [:div {:class $row}
        [:span {:class $label} "Disabled:"]
        (button/button {:disabled true} "Disabled")
        (button/button {:variant :outline :disabled true} "Disabled")]]))

;; -- Card Demo --

(defn demo-cards []
  (<< [:div {:class $section}
       [:h2 {:class $section-title} "Card"]
       [:div (css :flex {:gap "16px" :flex-wrap "wrap"})
        (card/card {}
          (<< (card/card-header {}
                (<< (card/card-title {} "Card Title")
                    (card/card-description {} "Card description goes here.")))
              (card/card-content {}
                (<< [:p "This is the card content area. You can put any content here."]))
              (card/card-footer {}
                (<< (button/button {:variant :outline :size :sm} "Cancel")
                    (button/button {:size :sm} "Save")))))

        (card/card {}
          (<< (card/card-header {}
                (<< (card/card-title {} "Notifications")
                    (card/card-description {} "You have 3 unread messages.")))
              (card/card-content {}
                (<< [:p "Check your inbox for the latest updates."]))))]]))

;; -- Toggle Demo --

(defc demo-toggles []
  (bind toggle-state-ref (atom {:bold false :italic false :outline false}))
  (bind toggle-state (sg/watch toggle-state-ref))

  (render
    (<< [:div {:class $section}
         [:h2 {:class $section-title} "Toggle"]
         [:div {:class $row}
          [:span {:class $label} "Default:"]
          (toggle/toggle {:pressed (:bold toggle-state)
                          :on-change #(swap! toggle-state-ref assoc :bold %)}
            "B")
          (toggle/toggle {:pressed (:italic toggle-state)
                          :on-change #(swap! toggle-state-ref assoc :italic %)}
            "I")]
         [:div {:class $row}
          [:span {:class $label} "Outline:"]
          (toggle/toggle {:variant :outline
                          :pressed (:outline toggle-state)
                          :on-change #(swap! toggle-state-ref assoc :outline %)}
            "Toggle me")]
         [:div {:class $row}
          [:span {:class $label} "Sizes:"]
          (toggle/toggle {:size :sm} "Sm")
          (toggle/toggle {:size :default} "Md")
          (toggle/toggle {:size :lg} "Lg")]
         [:div {:class $row}
          [:span {:class $label} "Disabled:"]
          (toggle/toggle {:disabled true} "Off")
          (toggle/toggle {:pressed true :disabled true} "On")]])))

;; -- Switch Demo --

(defc demo-switches []
  (bind switch-state-ref (atom {:airplane false :wifi true :bluetooth false}))
  (bind switch-state (sg/watch switch-state-ref))

  (render
    (<< [:div {:class $section}
         [:h2 {:class $section-title} "Switch"]
         [:div (css :flex :flex-col {:gap "12px"})
          [:div (css :flex :items-center {:gap "8px"})
           (switch/ui-switch {:checked (:airplane switch-state)
                              :on-change #(swap! switch-state-ref assoc :airplane %)
                              :id "airplane"})
           [:label {:for "airplane"} "Airplane Mode"]]
          [:div (css :flex :items-center {:gap "8px"})
           (switch/ui-switch {:checked (:wifi switch-state)
                              :on-change #(swap! switch-state-ref assoc :wifi %)
                              :id "wifi"})
           [:label {:for "wifi"} "Wi-Fi"]]
          [:div (css :flex :items-center {:gap "8px"})
           (switch/ui-switch {:checked (:bluetooth switch-state)
                              :on-change #(swap! switch-state-ref assoc :bluetooth %)
                              :id "bluetooth"})
           [:label {:for "bluetooth"} "Bluetooth"]]
          [:div (css :flex :items-center {:gap "8px"})
           (switch/ui-switch {:disabled true :id "disabled"})
           [:label {:for "disabled"} "Disabled"]]]])))

;; -- Tabs Demo --

(defc demo-tabs []
  (bind tab-ref (atom "account"))
  (bind active-tab (sg/watch tab-ref))

  (render
    (<< [:div {:class $section}
         [:h2 {:class $section-title} "Tabs"]
         (tabs/tabs {}
           (<< (tabs/tabs-list {}
                 (<< (tabs/tabs-trigger {:value "account" :active active-tab
                                         :on-click #(reset! tab-ref "account")}
                       "Account")
                     (tabs/tabs-trigger {:value "password" :active active-tab
                                         :on-click #(reset! tab-ref "password")}
                       "Password")
                     (tabs/tabs-trigger {:value "settings" :active active-tab
                                         :on-click #(reset! tab-ref "settings")}
                       "Settings")))
               (tabs/tabs-content {:value "account" :active active-tab}
                 (<< (card/card {}
                       (<< (card/card-header {}
                             (<< (card/card-title {} "Account")
                                 (card/card-description {} "Make changes to your account here.")))
                           (card/card-content {}
                             (<< [:p "Your account settings and preferences."]))))))
               (tabs/tabs-content {:value "password" :active active-tab}
                 (<< (card/card {}
                       (<< (card/card-header {}
                             (<< (card/card-title {} "Password")
                                 (card/card-description {} "Change your password here.")))
                           (card/card-content {}
                             (<< [:p "Update your password to keep your account secure."]))))))
               (tabs/tabs-content {:value "settings" :active active-tab}
                 (<< (card/card {}
                       (<< (card/card-header {}
                             (<< (card/card-title {} "Settings")
                                 (card/card-description {} "Manage your preferences.")))
                           (card/card-content {}
                             (<< [:p "Configure notification preferences and more."]))))))))])))

;; -- Dialog Demo --

(defc demo-dialog []
  (bind dialog-ref (atom false))
  (bind dialog-open? (sg/watch dialog-ref))

  (render
    (<< [:div {:class $section}
         [:h2 {:class $section-title} "Dialog"]
         (button/button {:on-click #(reset! dialog-ref true)} "Open Dialog")
         (dialog/dialog {:open dialog-open?
                         :on-close #(reset! dialog-ref false)}
           (<< (dialog/dialog-header {}
                 (<< (dialog/dialog-title {} "Are you sure?")
                     (dialog/dialog-description {} "This action cannot be undone. This will permanently delete your account.")))
               (dialog/dialog-footer {}
                 (<< (button/button {:variant :outline
                                     :on-click #(reset! dialog-ref false)} "Cancel")
                     (button/button {:variant :destructive
                                     :on-click #(reset! dialog-ref false)} "Delete")))))])))

;; -- Root --

(def $app
  (css {:max-width "800px"
        :margin "0 auto"
        :padding "32px"
        :font-family "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        :color "hsl(var(--ui-foreground))"
        :background-color "hsl(var(--ui-background))"
        :min-height "100vh"}))

(def $page-title
  (css {:font-size "32px"
        :font-weight "700"
        :margin-bottom "8px"
        :letter-spacing "-0.025em"}))

(def $page-desc
  (css {:font-size "16px"
        :color "hsl(var(--ui-muted-foreground))"
        :margin-bottom "32px"}))

(defc ui-root []
  (render
    (<< [:div {:class $app}
         [:h1 {:class $page-title} "shadow-grove UI Components"]
         [:p {:class $page-desc} "A port of shadcn/ui components for shadow-grove."]
         (separator/separator {})
         [:div (css {:margin-top "32px"})
          (demo-badges)
          (demo-separators)
          (demo-buttons)
          (demo-cards)
          (demo-toggles)
          (demo-switches)
          (demo-tabs)
          (demo-dialog)]])))

(defonce root-el
  (js/document.getElementById "root"))

(defonce rt-ref
  (sg/get-runtime ::components))

(defn ^:dev/after-load start []
  (sg/render rt-ref root-el (ui-root)))

(defn init []
  (start))
