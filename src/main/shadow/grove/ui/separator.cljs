(ns shadow.grove.ui.separator
  (:require
    [shadow.grove :as sg :refer (<< css)]))

(def $base
  (css {:flex-shrink "0"
        :background-color "hsl(var(--ui-border))"}))

(def $horizontal
  (css {:height "1px"
        :width "100%"}))

(def $vertical
  (css {:width "1px"
        :height "100%"}))

(defn separator [opts]
  (let [{:keys [orientation class]
         :or {orientation :horizontal}} opts
        orient-class (if (= orientation :vertical) $vertical $horizontal)]
    (<< [:div {:role "separator"
               :aria-orientation (name orientation)
               :class [$base orient-class class]}])))
