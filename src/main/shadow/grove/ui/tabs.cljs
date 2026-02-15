(ns shadow.grove.ui.tabs
  (:require
    [shadow.grove :as sg :refer (<< css)]))

(def $root
  (css {:width "100%"}))

(def $list
  (css :inline-flex :items-center
    {:height "40px"
     :border-radius "var(--ui-radius)"
     :background-color "hsl(var(--ui-muted))"
     :color "hsl(var(--ui-muted-foreground))"
     :padding "4px"
     :gap "2px"}))

(def $trigger
  (css :inline-flex :items-center :justify-center
    {:border-radius "calc(var(--ui-radius) - 2px)"
     :padding "6px 12px"
     :font-size "14px"
     :font-weight "500"
     :white-space "nowrap"
     :transition "background-color 150ms, color 150ms"
     :cursor "pointer"
     :border "none"
     :outline "none"
     :background-color "transparent"
     :color "inherit"}
    ["&:focus-visible" {:outline "2px solid hsl(var(--ui-ring))"
                        :outline-offset "2px"}]
    ["&:disabled" {:opacity "0.5"
                   :pointer-events "none"}]))

(def $trigger-active
  (css {:background-color "hsl(var(--ui-background))"
        :color "hsl(var(--ui-foreground))"
        :box-shadow "0 1px 3px rgba(0,0,0,0.1)"}))

(def $content
  (css {:margin-top "8px"
        :outline "none"}
    ["&:focus-visible" {:outline "2px solid hsl(var(--ui-ring))"
                        :outline-offset "2px"}]))

(defn tabs [opts body]
  (<< [:div {:class [$root (:class opts)]}
       body]))

(defn tabs-list [opts body]
  (<< [:div {:role "tablist"
             :class [$list (:class opts)]}
       body]))

(defn tabs-trigger [opts body]
  (let [{:keys [value active on-click class disabled]} opts
        is-active (= value active)]
    (<< [:button {:role "tab"
                  :type "button"
                  :aria-selected (str is-active)
                  :data-state (if is-active "active" "inactive")
                  :disabled disabled
                  :class [$trigger (when is-active $trigger-active) class]
                  :on-click on-click}
         body])))

(defn tabs-content [opts body]
  (let [{:keys [value active class]} opts]
    (when (= value active)
      (<< [:div {:role "tabpanel"
                 :class [$content class]}
           body]))))
